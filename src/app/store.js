import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../features/campsites/CampsitesSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionReducer } from '../features/promotion/PromotionSlice';
import { commentsReducer } from '../features/comments/CommentSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    promotions:promotionReducer,
    partners: partnersReducer,
    comments: commentsReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

