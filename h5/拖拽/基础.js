/*
1、data 自定义数据
    例子<h1 data-name='123' data-name-first='abc'></h1>

      获取 let dom = document.querySelector('h1')
           dom.dataset.name //123 
           dom.dataset.nameFirst //abc 
2、延迟加载JS
  defer和async
    defer:延迟加载，会按顺序执行，在DOMcontentLoaded执行前被触发
    async:异步加载，加载完就触发，有顺序问题

3、拖拽
   首先给被拖拽的元素添加一个属性draggable,设置为true,标示让其元素可拖拽

   拖拽元素事件：事件对象为被拖拽元素
    dragstart  拖拽前触发
    drag       拖拽中
    dragend    拖拽结束触发

   目标元素事件：事件对象为目标元素
    dragenter  进入目标元素触发，相当于mouseover
    dragover   进入目标、离开目标之间，连续触发
    dragleave  离开目标元素触发，相当于mouseout
    drop       在目标元素上释放鼠标触发

   想要触发drop事件，必须在dragover中阻止默认事件；阻止前后注意鼠标变化

   事件的执行顺序：
      drop不触发的时候
        dragstart > drag > dragenter > dragover > dragleave > dragend
      drop触发的时候(dragover的时候阻止默认事件)
        dragstart > drag > dragenter > dragover > drop > dragend

   事件源身上的dataTransfer对象：
    e.dataTransfer.setData():设置数据key和value()
    e.dataTransfer
    e.dataTransfer
    e.dataTransfer
    e.dataTransfer











*/