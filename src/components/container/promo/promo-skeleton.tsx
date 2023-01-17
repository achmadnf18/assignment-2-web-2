import { PromoCard } from './promo-card';

export function PromoSkeleton() {
  return (
    <>
      <PromoCard key={1} isLoading />
      <PromoCard key={2} isLoading />
      <PromoCard key={3} isLoading />
      <PromoCard key={4} isLoading />
      <PromoCard key={5} isLoading />
      <PromoCard key={6} isLoading />
      <PromoCard key={7} isLoading />
      <PromoCard key={8} isLoading />
    </>
  );
}
