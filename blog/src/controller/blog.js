const getList = (author, keyword) => {
    //先返回假数据(格式是正确的)
    return [{
        id: 1,
        title: '标题1',
        content: '内容1',
        createTime: 1605715751612,
        author: '张三'
    },{
        id: 2,
        title: '标题2',
        content: '内容2',
        createTime: 1605715810591,
        author: '李四'
    }]
}

const getDetail = (id) => {
    //先返回假数据(格式是正确的)
    return {
        id: 1,
        title: '标题1',
        content: '内容1',
        createTime: 1605715751612,
        author: '张三'
    }
}

const newBlog = (blogData = {}) => {
    //blogData是一个博客对象，包含title content 属性
    return  {
        id: 3  //表示新建博客插入到表里的id，新建成功
    }
}

const updateBlog = (id, blogData = {}) => {
    //id是需要更新的博客id
    //blogData是一个博客对象，包含title content 属性
    return true
}

const delBlog = (id, blogData = {}) => {
    //id是需要删除的博客id
    return true
}



module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}