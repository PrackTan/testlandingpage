import React from 'react';
import { 
  Box, Typography, TextField, Radio, RadioGroup, FormControlLabel, Button, Grid, FormLabel 
} from '@mui/material';

const IphoneForm = () => {
  return (
    <Box 
      sx={{
        backgroundColor: '#000', 
        color: '#fff', 
        padding: '30px',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '0 auto'
      }}
    >
      <Typography sx = {{marginBottom:5}} variant="h5" align="center" gutterBottom>
        Bạn quan tâm sản phẩm nào?
      </Typography>

      {/* Product Selection */}
      <Grid container spacing={2} justifyContent="center" marginBottom={2}>
        <Grid item>
          <Button variant="contained" sx={{ backgroundColor: '#ff0000' }}>
            iPhone 15 Pro Max
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ backgroundColor: '#fff', color: '#000' }}>
            iPhone 15 Pro
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ backgroundColor: '#fff', color: '#000' }}>
            iPhone 15 Plus
          </Button>
        </Grid>
      </Grid>

      {/* Storage Option */}
      <Box marginBottom={2} sx={{justifyContent:"center"}}>
        <Typography>Storage</Typography>
        <RadioGroup row defaultValue="256GB">
          <FormControlLabel value="256GB" control={<Radio color="secondary" />} label="256GB" />
          <FormControlLabel value="512GB" control={<Radio color="secondary" />} label="512GB" />
          <FormControlLabel value="1TB" control={<Radio color="secondary" />} label="1TB" />
        </RadioGroup>
      </Box>

      {/* Color Option */}
      <Box marginBottom={2}>
        <Typography>Color</Typography>
        <RadioGroup row defaultValue="Titanium">
          <FormControlLabel value="Titanium" control={<Radio color="secondary" />} label="Titanium" />
          <FormControlLabel value="Blue Titanium" control={<Radio color="secondary" />} label="Blue Titanium" />
          <FormControlLabel value="White Titanium" control={<Radio color="secondary" />} label="White Titanium" />
          <FormControlLabel value="Black Titanium" control={<Radio color="secondary" />} label="Black Titanium" />
        </RadioGroup>
      </Box>

      {/* Price Section */}
      <Box marginBottom={2}>
        <Typography>Giá niêm yết: 34.990.000đ</Typography>
        <Typography>Mua BHTD: 26.990.000đ</Typography>
        <Typography>Mua Phụ Kiện: 27.690.000đ</Typography>
        <Typography>Mua Thẳng: 27.990.000đ</Typography>
      </Box>

      {/* User Information */}
      <Box marginBottom={2}>
        <TextField
          label="Tên"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: '#fff' }}
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          label="Số điện thoại"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: '#fff' }}
        />
      </Box>

      {/* Current Phone Selection */}
      <Box marginBottom={2}>
        <Typography>Hiện tại bạn đang sử dụng điện thoại gì?</Typography>
        <RadioGroup row defaultValue="iPhone">
          <FormControlLabel value="iPhone" control={<Radio color="secondary" />} label="iPhone" />
          <FormControlLabel value="Samsung" control={<Radio color="secondary" />} label="Samsung" />
          <FormControlLabel value="Khác" control={<Radio color="secondary" />} label="Khác" />
        </RadioGroup>
      </Box>

      {/* Promotion Options */}
      <Box marginBottom={2}>
        <Typography>Bạn thích nhận được ưu đãi nào sau đây?</Typography>
        <RadioGroup>
          <FormControlLabel value="tặng phụ kiện" control={<Radio color="secondary" />} label="Quà tặng phụ kiện" />
          <FormControlLabel value="giá tốt" control={<Radio color="secondary" />} label="Giá bán tốt nhất" />
          <FormControlLabel value="cũ đổi mới" control={<Radio color="secondary" />} label="Thu cũ đổi mới giá cao" />
          <FormControlLabel value="mua kèm" control={<Radio color="secondary" />} label="Giá bán ưu đãi mua kèm giảm thêm" />
        </RadioGroup>
      </Box>

      {/* Additional Request */}
      <Box marginBottom={2}>
        <TextField
          label="Yêu cầu thêm ưu đãi"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: '#fff' }}
        />
      </Box>

      {/* Submit Button */}
      <Box textAlign="center">
        <Button variant="contained" sx={{ backgroundColor: '#ffcc00', color: '#000' }}>
          Gửi
        </Button>
      </Box>
    </Box>
  );
};

export default IphoneForm;
