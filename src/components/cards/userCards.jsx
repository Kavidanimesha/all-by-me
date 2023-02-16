// @mui
import { Avatar, Box, Card, Divider, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import cssStyles from '../../utils/cssStyles';
import SvgIconStyle from '../../components/svgIconsStyles';

// ----------------------------------------------------------------------

const OverlayStyle = styled('div')(({ theme }) => ({
  ...cssStyles().bgBlur({ blur: 2, color: theme.palette.primary.darker }),
  top: 0,
  zIndex: 8,
  content: "''",
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

export default function UserCard() {

  return (
    <Card sx={{ textAlign: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        <SvgIconStyle
          src="https://minimal-assets-api.vercel.app/assets/icons/shape-avatar.svg"
          sx={{
            width: 144,
            height: 62,
            zIndex: 10,
            left: 0,
            right: 0,
            bottom: -26,
            mx: 'auto',
            position: 'absolute',
            color: 'background.paper',
          }}
        />
        <Avatar
          alt={"name"}
          src={"avatarUrl"}
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -32,
            mx: 'auto',
            position: 'absolute',
          }}
        />
        <OverlayStyle />
        {/* <Image src={"cover"} alt={"cover"} ratio="16/9" /> */}
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 6 }}>
        {"name"}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {"position"}
      </Typography>

      <Stack alignItems="center">
        {/* <SocialsButton initialColor sx={{ my: 2.5 }} /> */}
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ py: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div>
          <Typography variant="caption" component="div" sx={{ mb: 0.75, color: 'text.disabled' }}>
            Follower
          </Typography>
          <Typography variant="subtitle1">34</Typography>
        </div>
      </Box>
    </Card>
  );
}
