const Meeting=require("../models/MeetingsModel")

const createMeeting=async(req, res)=>{
    try {
        const data=req.body
        const meeting=await Meeting.create({
            title:data.title,
            participants: data.participants,
            meetingDate: data.meetingDate,
            transcript: data.transcript,
            createdBy: data._id

        });
        res.status(201).json({
            traceId: req.traceId,
            success:true,
            message:"meeting created successfuly"
        })
    } catch (error) {
        res.status(500).json({
      success: false,
      message: err.message
    });

    }
}

const getAllMeeting=async(req, res)=>{
    try{
        const meetings=await Meeting.find()
        res.status(200).json({
            traceId: req.traceId,
            data:meetings, // on this place of we can write anyrhing like info:meeting etc 
            success:true,
            message:"all meetings"
        })
    }catch(error){
        res.json(500).json({
             success: false,
             message: err.message
        })
    }
}

const getMeetingById=async(req, res)=>{
    try{
        const id=req.params.id
        const meeting=await Meeting.findById({_id:id})
        res.status(200).json({
            traceId: req.traceId,
            succes:true,
            data:meeting
        })

    }catch(error){
        res.json(500).json({
            succes:false,
            message:err.message
        })
    }
}


module.exports={createMeeting,getAllMeeting,getMeetingById}