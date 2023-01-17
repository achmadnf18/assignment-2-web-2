import { Card, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import { PromoState } from 'store/promo/types';

export type PromoCardProps = {
  promo?: PromoState;
  isLoading?: boolean;
};

export function PromoCard({ promo, isLoading }: PromoCardProps) {
  return (
    <Card sx={{ width: 140 }}>
      {isLoading && <Skeleton sx={{ height: 140 }} variant="rectangular" animation="wave" />}

      {!isLoading && (
        <CardMedia
          sx={{ height: 140 }}
          image={promo?.background}
          title={promo?.merchantName || 'promo'}
        />
      )}

      <CardContent>
        {isLoading && (
          <>
            <Skeleton animation="wave" height={30} width="80%" />
            <Skeleton animation="wave" height={20} width="40%" />
          </>
        )}

        {!isLoading && (
          <>
            <Typography gutterBottom variant="body1" component="div">
              {promo?.merchantName}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {promo?.titleRow1} {promo?.titleRow2}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}
