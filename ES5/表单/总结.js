/*
      form
        获取form表单元素
        <input type='reset'>  button 
        <input type='submit'> button 一样

        document.getElementById('formId')
        document.forms 获取所有的表单,可以通过数值索引和name值获取特定的表单
        
        阻止表单提交
        dom.preventDefault() 
        提交表单,注意用户重复提交 可以设置disabled 不能通过onclick来设置
        dom.submit() 不会触发submit事件
        表单重置
        dom.reset() 会向单击按钮一样触发reset事件 
        表单字段
        dom.elements
            里面包括了索引和name
            如果name相同,则返回一个NodeList
        dom.elements[0].focus  //隐藏字段不能聚焦
                       .blur()
                       .change
        input/textarea 区别
          大小   size/rows cols
          最大数 maxlength/ 不能限制
        select()和事件
          方法:被触发的时候当前文本全部选中
          事件:选中文本才触发,事件在有2个属性
          dom.elements[0].selectionStart  选中文本区域左边的偏移量
          dom.elements[0].selectionEnd    选中文本区域右边的偏移量
        过滤输入
          //屏蔽 dom 所有的输入,导致dom输入框变成只读
          // 如果想屏蔽特定的字符可以左判断
          dom.onkeypress=(e)=>{
           e.preventDefault(); 
         }
        操作剪贴板
          6个事件
          beforecopy:在发生复制操作前触发
          copy:在发生复制操作时触发
          beforecut:在发生剪切操作前触发
          cut:在发生剪切操作时触发
          beforepaste:在发生粘贴操作前触发
          paste:在发生粘贴操作时触发
        自动切换焦点
          用户在输入值达到要求的时候,自动切换下个焦点
        H5约束验证API
          必填字段
             required
          类型(type)
             email url number  color date
          范围(类型为number时候)
             min=0 max=100 step=5
          输入模式(pattern)
              只能输入一个数组 pattern后面接正则表达式
              <form action="#" name=form>
                  国家代码：<input type="text" name="country_code" pattern="\d"
                  title="三个字母的国家代码" />
                  <input type="submit" />
              </form>
          检测有效性
            checkValidity()
          禁止验证
            novalidate
        选择框脚本
          <form action="" name="form">
           <select name="a" id="a">
            <option value="a1"></option>
            <option value="a2"></option>
           </select>
          </form>
          每一个 option 都有一个HTMLOptionElement对象
            属性  
              index options集合中的索引
              label 当前选择的标签
              selected  布尔值
              text  选项的文本
              vallue  选项的值
          let dom = document.forms[0].elements['a']
              dom.options[0].value == a1    
          注意:其他字段change事件是在值被修改且焦点离开当前字段时触发
               而选择框的change事件只要选中了选项就会触发
          option 可以通过dom的增删处理
        表单序列化
          表单提交时候,浏览器如何将数据发给服务器
          1、对表单字段的名称和值进行URL编码,使用(&)分隔
          2、不发送唧哝的表单字段
          3、只发送勾选的复选框和单选框
          4、不发送type为reset和button的按钮
          5、多选选择框中的每个选中的值单独一个条目
          6、在单击提交按钮表单的情况下，也会发送提交按钮
             否则,不发送提交按钮,也包括type为'image'的<input>元素
          7、<selection>元素的值,就是选中<option>元素的value特性值,
             如果<option>元素没有value特性,则是<option>元素的文本值

          js模表单提交缺少代码
          获取表单元素
            let dom = document.forms[0]
            一般都是dom.name 就可以获取到值
            但是checkcout 获取的是数组,还要遍历
*/
