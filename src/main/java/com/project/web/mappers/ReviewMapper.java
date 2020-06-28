package com.project.web.mappers;

import com.project.web.proxy.Pager;
import com.project.web.review.ReviewDTO;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewMapper {

    public void insertReview(ReviewDTO review);
    public void updateReview(ReviewDTO review);
    public void deleteReview(ReviewDTO review);
    public int count();
    public List<ReviewDTO> selectReviews(Pager pager);
    public ReviewDTO selectReview(String reviewId);
}