const ActionItem=require("../models/ActionItemsModel")

const actionItem=async(req, res)=>{
    try{
        const data=req.body; //mongoose will aoutomaticly asing the given  info.
        const actionItem= await ActionItem.create(req.body);
        res.status(201).json({
            traceId: req.traceId,
        success: true,
        data: actionItem
    });
    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

//update the status
const updateStatus=async(req, res)=>{
    try{
        const actionItem= await ActionItem.findByIdAndUpdate(req.params.id,
                        {
                            status:req.body.status
                        },
                        {
                            new:true
                        }
        )
        res.status(200).json({
            traceId: req.traceId,
            success:true,
            data:actionItem,
            message:"status update successfully"
        })
    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const getActionItem=async(req, res)=>{
    try{
        const actionItem=await ActionItem.find();
        res.status(200).json({
            traceId: req.traceId,
            success:true,
            data:actionItem,

        })
    }catch(error){
        success:false
        message:error.message
    }
}


module.exports={actionItem,updateStatus,getActionItem};