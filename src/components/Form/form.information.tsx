import React, { useState, ChangeEvent } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  Checkbox,
  FormGroup
} from '@mui/material';

interface FormData {
  name: string;
  phone: string;
  currentPhone: string;
  preferredOffer: string[];
  additionalRequest: string;
}

const InfoForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    currentPhone: '',
    preferredOffer: [],
    additionalRequest: '',
  });

  // Handle text input changes
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle current phone radio button changes
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      currentPhone: event.target.value,
    });
  };

  // Handle preferred offers checkbox changes
  const handleOfferChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newPreferredOffer = formData.preferredOffer.includes(value)
      ? formData.preferredOffer.filter((offer) => offer !== value)
      : [...formData.preferredOffer, value];

    setFormData({
      ...formData,
      preferredOffer: newPreferredOffer,
    });
  };

  const handleSubmit = async () => {
    console.log(formData);
    // Thực hiện gửi dữ liệu lên Google Sheets tại đây
    try {
      const response = await fetch('/api/google-sheets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 3 }}>
        Điền thông tin của bạn
      </Typography>
      <Grid container spacing={2}>
        {/* Name Input */}
        <Grid item xs={6}>
          <TextField
            label="Tên"
            name="name"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            sx={{ backgroundColor: '#fff' }}
          />
        </Grid>

        {/* Phone Input */}
        <Grid item xs={6}>
          <TextField
            label="Số điện thoại"
            name="phone"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            sx={{ backgroundColor: '#fff' }}
          />
        </Grid>

        {/* Current Phone Radio Group */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Hiện tại bạn đang sử dụng điện thoại gì?
          </Typography>
          <RadioGroup
            row
            name="currentPhone"
            onChange={handlePhoneChange}
            sx={{ marginTop: 1, justifyContent:"center"}}
          >
            <FormControlLabel
              value="Samsung"
              control={<Radio sx={{color:"#2176d8"}} />}
              label="Samsung"
            />
            <FormControlLabel value="iPhone" control={<Radio sx={{color:"#2176d8"}} />} label="iPhone" />
            <FormControlLabel value="Khác" control={<Radio sx={{color:"#2176d8"}} />} label="Khác" />
          </RadioGroup>
        </Grid>

        {/* Preferred Offers Checkboxes */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Bạn thích nhận được ưu đãi nào?
          </Typography>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  value="Lên đời siêu phẩm"
                  onChange={handleOfferChange}
                  sx={{color:"#2176d8"}}
                />
              }
              label="Lên đời siêu phẩm"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="Quà tặng hấp dẫn"
                  onChange={handleOfferChange}
                  sx={{color:"#2176d8"}}
                />
              }
              label="Quà tặng hấp dẫn"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="Giá bán rẻ nhất"
                  onChange={handleOfferChange}
                  sx={{color:"#2176d8"}}
                />
              }
              label="Giá bán rẻ nhất"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="Giá bán ưu đãi"
                  onChange={handleOfferChange}
                  sx={{color:"#2176d8"}}
                />
              }
              label="Giá bán ưu đãi"
            />
          </FormGroup>
        </Grid>

        {/* Additional Request Input */}
        <Grid item xs={12}>
          <TextField
            label="Yêu cầu thêm ưu đãi"
            name="additionalRequest"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            sx={{ backgroundColor: '#fff', marginTop: 2 }}
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: '#ffcc00',
              color: '#000',
              marginTop: 3,
            }}
          >
            Gửi
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfoForm;
