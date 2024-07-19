const express = require("express");
const cors = require("cors");
const { MongoClient }=require("mongodb");

const app=express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
	const url="mongodb+srv://kakadomkar03:pWV09PxuDpZbUUYs@cluster0.axccvxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const con=new MongoClient(url);
	const db=con.db("sms19july24");
	const coll=db.collection("student");
	const doc={"_id":req.body.rno,"name":req.body.name,"marks":req.body.marks};
	coll.insertOne(doc)
	.then(result => res.send(result))
	.catch(error => res.send(error));

});

app.get("/get",(req,res)=>{
	const url="mongodb+srv://kakadomkar03:pWV09PxuDpZbUUYs@cluster0.axccvxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const con=new MongoClient(url);
	const db=con.db("sms19july24");
	const coll=db.collection("student");
	coll.find({}).toArray()
	.then(result => res.send(result))
	.catch(error => res.send(error));

});

app.delete("/delete",(req,res)=>{
	const url="mongodb+srv://kakadomkar03:pWV09PxuDpZbUUYs@cluster0.axccvxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const con=new MongoClient(url);
	const db=con.db("sms19july24");
	const coll=db.collection("student");
	const doc={"_id":req.body.rno};
	coll.deleteOne(doc)
	.then(result => res.send(result))
	.catch(error => res.send(error));

});

app.put("/update",(req,res)=>{
	const url="mongodb+srv://kakadomkar03:pWV09PxuDpZbUUYs@cluster0.axccvxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const con=new MongoClient(url);
	const db=con.db("sms19july24");
	const coll=db.collection("student");
	const doc={"name":req.body.name,"marks":req.body.marks};
	const filter={"_id":req.body.rno};
	coll.updateOne(filter,{"$set":doc})
	.then(result => res.send(result))
	.catch(error => res.send(error));

});


app.listen(9000, () =>{console.log("ready @ 9000");});