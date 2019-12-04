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

        let acl = new AV.ACL()
        //因为默认当前用户可读，默认 public 不可写
        acl.setPublicReadAccess(false)
        acl.setWriteAccess(AV.User.current(), true)
        acl.setReadAccess(AV.User.current(),true)
        todo.setACL(acl)

        todo.save().then(function (response) {
            successFn.call(null, response.id)
        }, function (error) {
            errorFn && errorFn.call(null, error)
        })
    },
    getByUser(user, successFn, errorFn) {
        let query = new AV.Query('Todo')
        query.equalTo('delated',false) //可以在同一个查询中设置多个条件，这样可以获取满足所有条件的结果。可以理解为所有的条件是 AND 的关系：
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
    update({ id, title, status, delated }, successFn, errorFn) {
        let todo = AV.Object.createWithoutData('Todo', id)
        title !== undefined && todo.set('title', title)
        status !== undefined && todo.set('status', status)
        delated !== undefined && todo.set('delated', delated)
        // 为什么我要像上面那样写代码？
        // 考虑如下场景
        // update({id:1, title:'hi'})
        // 调用 update 时，很有可能没有传 status 和 deleted
        // 也就是说，用户只想「局部更新」
        // 所以我们只 set 该 set 的
        // 那么为什么不写成 title && todo.set('title', title) 呢，为什么要多此一举跟 undefined 做对比呢？
        // 考虑如下场景
        // update({id:1, title: '', status: null}}
        // 用户想将 title 和 status 置空，我们要满足
        todo.save().then((response) => {
            successFn && successFn.call(null)
        }, (error) => {
            errorFn && errorFn.call(null, error)
        })
    },
    destroy(todoId, successFn, errorFn) {
    //     let todo = AV.Object.createWithoutData('Todo', todoId)
    //     todo.destroy().then(function (response) {
    //         successFn && successFn.call(null)
    //     }, function (error) {
    //         errorFn && errorFn.call(null, error)
    //     })
    TodoModel.update({id:todoId,delated:true},successFn,errorFn)
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