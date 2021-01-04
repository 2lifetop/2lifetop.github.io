jQuery('.test')//不返回元素而是返回api对象
    .addClass('red')
    .addClass('bule')//遍历刚才所选择的元素，添加 .red 之后返回的依旧是api对象所以可以继续操作，链式操作