function Tab (node,obj){
  this.container = node;
  this.aInput = this.container.getElementsByTagName('input');
  this.aDiv = this.container.getElementsByTagName('div');
  this.ChangeTabBgc = obj.ChangeTabBgc;
  this.ChangeTabColor = obj.ChangeTabColor;
}

Tab.prototype = {
    constructor: Tab,
    init: function(){
      this.bind()
    },
    bind: function(){
      this.aInput[0].style.backgroundColor = this.ChangeTabBgc;
      this.aDiv[0].style.display = 'block';
      var that = this;
      for (var i = 0; i < this.aInput.length; i++) {
          this.aInput[i].index = i;
          this.aInput[i].onclick = function(){
              that.change(this);
          }
      }
    },
    change:function(obj){
      for (var i = 0; i < this.aInput.length; i++) {
          this.aInput[i].style.color = "";
          this.aInput[i].style.backgroundColor = '';
          this.aDiv[i].style.display = 'none';
      }
      //当前选中的标签和显示内容设置样式
      obj.style.backgroundColor = this.ChangeTabBgc;
      this.aDiv[obj.index].style.display = 'block';
      obj.style.color = this.ChangeTabColor;
    }
}

var tab1 = new Tab(document.querySelectorAll('.tab-container')[0],{
            ChangeTabBgc:'yellowgreen',
            ChangeTabColor:"#fff",
         });
tab1.init()
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1],{
         ChangeTabBgc:'purple',
         ChangeTabColor:"#fff",
    });
tab2.init()
