import "./Hero.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Hero = ({ books }) => {
  return (
    <div className="flex gap-3">
      {books.map((book) => {
        return (
          <div className="book-card-container">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 300 }}
                image={book.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.title}
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
