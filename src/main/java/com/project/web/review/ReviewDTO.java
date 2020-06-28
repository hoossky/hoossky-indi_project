package com.project.web.review;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class ReviewDTO {
    private String reviewId, reviewTitle, stars, reviewDate;
}