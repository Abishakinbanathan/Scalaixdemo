import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';

const Home = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [originalImages, setOriginalImages] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  
  useEffect(() => {
    fetchImagesFromUnsplash();
  }, []);

  const fetchImagesFromUnsplash = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos', {
        params: {
          client_id: "v6nOgRLQzCZkQfjncxUH44mtPr-CRujVF4Ly43W0LKE",
          per_page: 30  // Fetching 30 images initially
        }
      });
      setImages(response.data);
      setOriginalImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredImages = originalImages.filter(image =>
      image.alt_description.toLowerCase().includes(query)
    );
    setImages(filteredImages);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedImages = images.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <NavBar handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
      <Container style={{ marginTop: '20px' }}>
        <Grid container spacing={2}>
          {paginatedImages.map(image => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <Link to={`/details/${image.id}`} style={{ textDecoration: 'none' }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={image.urls.regular}
                    alt={image.alt_description}
                  />
                  <CardContent>
                    <Typography variant="h6" style={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', lineHeight: '24px' }}>
                      {image.alt_description}
                    </Typography>
                    <Typography style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: '400' }}>
                      Photo by {image.user.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" marginTop="20px">
          <Pagination
            count={Math.ceil(images.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
          />
        </Box>
      </Container>
    </>
  );
};

export default Home;
