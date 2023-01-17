/* eslint-disable unicorn/explicit-length-check */
/* eslint-disable react/no-array-index-key */
import usePagination from '@lucasmogari/react-pagination';
import { Box, Pagination, TextField } from '@mui/material';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPromo } from 'store/promo/selector';

import { PromoCard } from './promo-card';
import { PromoSkeleton } from './promo-skeleton';

export function PromoList() {
  const [search, setSearch] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const pagination = usePagination({
    page: 1,
    itemsPerPage: 8,
    totalItems: 1,
  });
  const start = (pagination.page - 1) * pagination.itemsPerPage;
  const end = pagination.page * pagination.itemsPerPage;

  const doSearch = (keyword: string) => {
    pagination.goTo(1);
    setSearch(keyword);
  };

  const promoList = useSelector(selectPromo);
  const promoListFiltered = promoList.filter((promo) =>
    promo.merchantName.toLowerCase().includes(search),
  );

  // const { data, isFetching } = useAllPromosQuery({
  //   search,
  //   limit: pagination.itemsPerPage,
  //   page: pagination.page,
  // });
  // const promoList = data?.items || [];

  useEffect(() => {
    pagination.setTotalItems(promoListFiltered.length || 1);
  }, [promoListFiltered]);

  useEffect(() => {
    setIsFetching(true);
    const timer = setTimeout(() => setIsFetching(false), 2000);

    return () => clearTimeout(timer);
  }, [pagination.page, search]);

  return (
    <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Box sx={{ display: 'flex' }}>
        <TextField
          label="Search Promo"
          id="search"
          fullWidth
          onChange={debounce((e) => doSearch(e.target.value), 2000)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const searchVal = (e.target as HTMLTextAreaElement).value;
              doSearch(searchVal);
            }
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          columnGap: '30px',
          rowGap: '30px',
          justifyContent: 'center',
        }}
      >
        {isFetching && <PromoSkeleton />}

        {!isFetching &&
          promoListFiltered
            ?.slice(start, end)
            .map((promo, idx) => <PromoCard key={`${idx}-${promo.id}`} promo={promo} />)}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination count={pagination.totalPages} onChange={(e, page) => pagination.goTo(page)} />
      </Box>
    </Box>
  );
}
