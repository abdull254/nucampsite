import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../features/campsites/CampsitesSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionReducer } from '../features/promotion/PromotionSlice';
import { commentsReducer } from '../features/comments/CommentSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    promotions:promotionReducer,
    partners: partnersReducer,
    comments: commentsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

