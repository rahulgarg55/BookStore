const book=require("../models/bookModels");

const createbook=async(req,res) => {
    try{
const { name,title,author}=req.body;  //object destructuring
const newbook=await book.create({name,title,author});
    res.status(201).json(newbook);
    }catch(error){
res.status(500).json({error:error.message});
}
};

const getbook=async(req,res) => {
try{
    const gettingbook=await book.findById(req.params.id);
    if(!gettingbook){
        return res.status(404).json({message:"book not found"});
    }
    res.status(200).json(gettingbook);
}catch(err){
    res.status(500).json({err:err.message});
}}

const updatebook=async(req,res) => {
try{
    const {title,name,author}=req.body;
const updatedbook=await book.findByIdAndUpdate(req.params.id,{title, name,author},{new:true});
if (!updatedbook) {
    return res.status(404).json({ message: "Book not found" });
}
res.status(201).json(updatedbook);
}
catch(err){
res.status(500).json({err:err.message});

}
}


const deletebook=async(req,res) => {
try{
const deletedbook=await book.findByIdAndDelete(req.params.id)
if (!deletedbook) {
    res.status(404).json({ message: "Book not found" });
}
res.status(201).json({message:"book deleletedd successfully"});
}catch(err){
res.status(500).json({err:err.message});
}
};


module.exports={createbook,getbook, updatebook, deletebook};