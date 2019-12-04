import AV from 'leancloud-storage'

AV.init({
    appId: "pEMYmCotCpDs8mpGE8L2wS0y-gzGzoHsz",
    appKey: "pYMJXjgzCIp4M4DJKLUXuavz",
    serverURLs: "https://pemymcot.lc-cn-n1-shared.com"
});

export default AV

export const TodoModel = {
    create({ status, title, delated }, successFn, errorFn) {
        //声明类型
        let Todo = AV.Object.extend('Todo')
        //新建对象
        var todo = new Todo()
        todo.set('status', status)
        todo.set('title', title)
        todo.set('delated', delated)
        todo.save().then(function (response) {
            successFn.call(null, response.id)
        }, function (error) {
            errorFn && errorFn.call(null, error)
        })
    },
    getByUser(user, successFn, errorFn) {
        let query = new AV.Query('Todo')
        query.find().then((response) => { //批量操作
            // console.log(response)
            let array = response.map((t) => {
                // console.log(t)
                return { id: t.id, ...t.attributes }
            })
            
            successFn.call(null, array)
        }, (error) => {
            errorFn && errorFn.call(null, error)
        })
    },
    update() {

    },
    destroy() {

    }

}

export function signUp(email, username, password, successFn, errorFn) {
    //新建AVUser对象实例
    var user = new AV.User()
    //设置用户名
    user.setUsername(username)
    //设置密码
    user.setPassword(password)
    //设置邮箱,没写
    user.setEmail(email)
    user.signUp().then(function (loginedUser) {
        let user = getUserFormAVUser(loginedUser)
        successFn.call(null, user)
    }, function (error) {
        errorFn.call(null, error)
    })
    return undefined
}
export function signIn(username, password, successFn, errorFn) {
    AV.User.logIn(username, password).then(function (loginedUser) {
        let user = getUserFormAVUser(loginedUser)
        successFn.call(null, user)
    }, function (error) {
        errorFn.call(null, error)
    })
}

export function getCurrentUser() {
    let user = AV.User.current()
    if (user) {
        return getUserFormAVUser(user)
    } else {
        return null
    }
}
export function signOut() {
    AV.User.logOut()
    return undefined
}

export function sendPasswordResetEmail(email, successFn, errorFn) {
    AV.User.requestPasswordReset(email).then(function (success) {
        successFn.call()
    }, function (error) {
        errorFn.call(null, error)
    })
}
function getUserFormAVUser(AVUser) {

    return {
        id: AVUser.id,
        ...AVUser.attributes   //就是把 AVUser.attributes 的属性拷贝到这个对象
    }

}