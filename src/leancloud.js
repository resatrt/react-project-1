import AV from 'leancloud-storage'

AV.init({
    appId: "pEMYmCotCpDs8mpGE8L2wS0y-gzGzoHsz",
    appKey: "pYMJXjgzCIp4M4DJKLUXuavz",
    serverURLs: "https://pemymcot.lc-cn-n1-shared.com"
});

export default AV

export function signUp(username, password, successFn, errorFn) {
    //新建AVUser对象实例
    var user = new AV.User()
    //设置用户名
    user.setUsername(username)
    //设置密码
    user.setPassword(password)
    //设置邮箱,没写
    user.signUp().then(function (loginedUser) {
        let user = getUserFormAVUser(loginedUser)
        successFn.call(null, user)
    }, function (error) {
        errorFn.call(null, error)
    })
    return undefined
}

export function getCurrentUser(){
    let user=AV.User.current()
    if(user){
        return getUserFormAVUser(user)
    }else{
        return null
    }
}
export function signOut(){
    AV.User.logOut()
    return undefined
}

function getUserFormAVUser(AVUser) {

    return {
        id: AVUser.id,
        ...AVUser.attributes   //就是把 AVUser.attributes 的属性拷贝到这个对象
    }

}