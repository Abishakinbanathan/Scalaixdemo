import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import NavBar from '../components/Navbar';

const Details = () => {
  const { id } = useParams();
  const [imageDetails, setImageDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchImageDetails();
  }, [id]);

  const fetchImageDetails = async () => {
    try {
      const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
        params: {
          client_id:"v6nOgRLQzCZkQfjncxUH44mtPr-CRujVF4Ly43W0LKE"
        }
      });
      setImageDetails(response.data);
    } catch (error) {
      console.error('Error fetching image details:', error);
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      <NavBar handleSearchChange={() => {}} searchQuery="" />
      <Container style={{ marginTop: '20px' }}>
        {imageDetails ? (
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={imageDetails.urls.regular}
              alt={imageDetails.alt_description}
            />
            <CardContent>
              <Typography variant="h4" style={{ fontFamily: 'Inter', fontSize: '24px', fontWeight: '600', lineHeight: '32px' }}>
                {imageDetails.alt_description}
              </Typography>
              <Typography style={{ fontFamily: 'Inter', fontSize: '18px', fontWeight: '400', margin: '20px 0' }}>
                Photo by {imageDetails.user.name}
              </Typography>
              <Button variant="contained" color="primary" onClick={handleBackClick} style={{ marginTop: '20px' }}>
                Back to Home
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Container>
    </>
  );
};

export default Details;
