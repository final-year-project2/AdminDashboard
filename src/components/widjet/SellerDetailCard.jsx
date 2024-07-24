import React from "react";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
function SellerDetailCard({ sellerData }) {
return (
<div className="w-full mx-5 my-2 flex rounded-md">
    <div className=" bg-gray-100">
    <img
        src={sellerData.image}
        alt=""
        className="w-full rounded-md p-4 h-96 object-cover"
    />
    <div className="p-5 bg-white mx-4 mb-4">
        <div className="text-3xl font-bold text-gray-600 flex justify-between">
        <div>{sellerData.user.name}</div>
        <div className="text-blue-600">
            <RecordVoiceOverIcon fontSize="large" />
        </div>
        </div>
        <Box
        sx={{
            "& > legend": { mt: 2 },
        }}
        >
        <Typography component="legend">Rating</Typography>
        <Rating name="read-only" value={sellerData.rating} readOnly />
        </Box>
        <div>
        He make around {sellerData.successful_campaigns} Successful compain
        </div>
        <div className="pt-2">Phone Number {sellerData.user.Phone_no}</div>
    </div>
    </div>
</div>
);
}

export default SellerDetailCard;
