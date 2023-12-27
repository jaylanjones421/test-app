import * as React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function UserCard({ data }) {
  return (
    <Card className="w-full h-full m-2 ">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.phone}
        </Typography>
      </CardContent>
      <CardActions className="flex items-center justify-end">
        <Button size="small" variant="outlined">
          <Link href={`/edit/${data.id}`}>Expand</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
