class node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
        this.height = 1;
    }
}
class Avl{
    constructor(){
        this.root = null;
    }
    leftRot(alpha){
        let beta = alpha.right;
        let sigma = beta.left;
        beta.left = alpha;
        alpha.right = sigma;
        alpha.height = 1+ Math.max(this.Height(alpha.left), this.Height(alpha.right));
        beta.height = 1+ Math.max(this.Height(beta.left), this.Height(beta.right));
        return beta;
    }

    rightrot(alpha){
        let beta = alpha.left;
        let sigma = beta.right;
        beta.right = alpha;
        alpha.left = sigma;
        alpha.height = 1+ Math.max(this.Height(alpha.left), this.Height(alpha.right));
        beta.height = 1+ Math.max(this.Height(beta.left), this.Height(beta.right));
        return beta;
    }
    Height(root){
        if(!root)return 0;
        return root.height;
    }
    insertioninAvl(val){
        this.root = this.Insert(val,this.root);
    }
    Insert(val , root){
        if(root == null)return new node(val);
        else if(val<root.val){
            root.left = this.Insert(val ,root.left);
        }
        else if(val >root.val){
            root.right = this.Insert(val ,root.right);
        }
        let bf = this.Height(root.left) - this.Height(root.right);
       
        // bf =  balancing factor

        root.height = 1+ Math.max(this.Height(root.left), this.Height(root.right));

        if(bf < -1){
            let beta = root.right;
            if(val < beta.val){
                root.right = this.rightrot(beta);
            }
            return this.leftRot(root);
        }
        if(bf >1){
            let beta = root.left;
            if(val>beta.val){
                root.left= this.leftRot(beta);
            }
            return this.rightrot(root);
        }
        return root;
    }
    inorderTraversal(){
        let res =[];
        this.inorder(res,this.root);
        return res;
    }
    inorder(res , root){
        if(!root)return null;
        res.push(root.val);
        this.inorder(res, root.left);
        this.inorder(res,root.right);
    }
    preorderTreaversal(){
        let res =[];
        this.preorder(res,this.root);
        return res;
    }
    preorder(res, root){
        if(!root)return null;
        this.preorder(res,root.left);
        res.push(root.val);
        this.preorder(res,root.right);
    }

}
let a = new Avl();
a.insertioninAvl(1);
a.insertioninAvl(2);
a.insertioninAvl(3);
a.insertioninAvl(4);
a.insertioninAvl(5);
a.insertioninAvl(6);
a.insertioninAvl(7);
a.insertioninAvl(8);
a.insertioninAvl(9);


let inor = a.inorderTraversal();
let pre  = a.preorderTreaversal();
console.log(inor , pre);