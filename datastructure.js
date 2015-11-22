/*
Queue
*/
var Queue = function() {
    this.dataStore = [],

    this.length = function() {
        return this.dataStore.length;
    }
    //入队
    this.enqueue = function(element) {
        this.dataStore.push(element);
    },
    //出队
    this.dequeue = function() {
        this.dataStore.shift();
    },
    //队首的元素
    this.front = function() {
        return this.dataStore[0];
    },
    //队尾的元素
    this.back = function() {
        return this.dataStore[this.dataStore.length - 1];
    },
    //检查是否是空队列
    this.isEmpty = function() {
        if (this.dataStore.length == 0) {
            return true;
        }
        return false;
    },
    //清空队列
    this.clear = function() {
        this.dataStore.length = 0;
    },
    this.toString = function() {
        return this.dataStore.join(",");
    }
}
/*
  列表
*/
var List = function() {
    this.dataStore = [];
    this.listSize = 0;
    this.append = function(element) {},
    this.insert = function() {},
    this.find = function(pos) {},
    this.remove = function(pos) {},
    this.clear = function() {}
}
/*
  栈
*/
var Stack = function() {
    this.dataStore = [],
    this.push = function(element) {
        this.dataStore.push(element)
    },
    this.pop = function() {
        return this.dataStore.pop();
    },
    this.peek = function() {
        return this.dataStore[this.dataStore.length - 1];
    }
    this.clear = function() {}
}
/*
  字典
*/
var Dict = function() {
    this.dataStore = new Array();
    this.add = function(key, value) {
        this.dataStore[key] = value;
    },
    this.find = function(key) {
        return this.dataStore[key];
    }
    this.remove = function(key) {
        delete this.dataStore[key]
    }
    this.showAll = function() {
         var self = this;
        Object.keys(this.dataStore).sort().map(function(element){
             console.log(element+"->"+self.dataStore[element])
        })

        
    }
    this.count = function() {
        var n = 0;
        for (var key in Object.keys(this.dataStore)) {
            n++;
        }
        return n;
    }
    this.clear = function(){
         var self = this;
        Object.keys(this.dataStore).sort().map(function(element){
             delete self.dataStore[element];
        })
    }

}


/*
 集合  set
*/
var Set = function(){
     this.dataStore = [];
     this.add = function(element){
          if(this.contains(element)){
             this.dataStore.push(element);
             return true;
          }else{
            return false;
          }
            
     },
     this.contains = function(element){
          if(this.dataStore.indexOf(element) != -1) return true;
          return false;
     },
     this.remove = function(element){
          if(this.contains(element)){
               var pos = this.dataStore.indexOf(element);
               this.dataStore.splice(pos,1);
               return true;
          }else{
               return false;
          }
     },
     this.size = function(){
        return this.dataStore.length;
     }
     this.union = function(otherSet){
           var tempSet = new Set();
           for(var i=0;i<this.dataStore.length;i++){
               tempSet.add(this.dataStore[i]);
           }
           for(var i=0;i<otherSet.length;i++){
               if(!tempSet.contains(otherSet[i])){
                   tempSet.push(otherSet[i]);
               }
           }
           return tempSet;
     }
}

/*
  BST
*/
var Node = function(data,left,right){
     this.data = data,
     this.left = left,
     this.right = right,
     this.show = function(){
          console.log(this.data);
     }
};
var BST = function(){
    this.root = null,
    this.insert = function(data){
        var n = new Node(data,null,null);
        if(this.root == null) {this.root = n;}else{
           var current = this.root;
           var parent;
           while(true){
               parent = current;
               if(data<current.data){
                    current = current.left;
                    if(current == null){
                        parent.left = n;
                        break;
                    }
                   
               }else{
                   current = current.right;
                   if(current == null){
                        parent.right = n;
                        break;
                   }
               }
           }
        }

    },
    this.inorder= function(node){
         
         if( node.left != null){
             this.inorder(node.left);
          }

          node.show();
          if(node.right != null){
             this.inorder(node.right);

          }


              
       
    },
    this.remove = function(){},
  
    this.getMin = function(){
        var current = this.root;
        while( current.left != null){
             current = current.left;
        }
        return current.data;
    },
    this.getMax = function(){
        var current = this.root;
        while(current.right != null){
             current = current.right;
        }
        return current.data;
    },
    this.find = function(data){
        var current = this.root;
        while(current != null){
             if(current.data == data){
                 return current;
             }else if(current.data>data){
                 current = current.left;
             }else if(data>current.data){
                 current = current.right;
             }
        }
        return null;
    }


}
