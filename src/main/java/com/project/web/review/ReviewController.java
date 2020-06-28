package com.project.web.review;

import com.project.web.mappers.ReviewMapper;
import com.project.web.proxy.Box;
import com.project.web.proxy.IFunction;
import com.project.web.proxy.Pager;
import com.project.web.proxy.Proxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*")
@RestController
@RequestMapping("/reviews")
public class ReviewController{
    @Autowired Pager pager;
    @Autowired ReviewMapper reviewMapper;
    @Autowired Proxy pxy;
    @Autowired Box<Object> box;

    @GetMapping("/{searchWord}/{pageNumber}")
    public Map<?, ?> list(@PathVariable("pageNumber") String pageNumber,
                          @PathVariable("searchWord") String searchWord){

        if(searchWord.equals("null")){
            pxy.print("검색어가 없습니다");
            pager.setSearchWord("");
        }else{
            pager.setSearchWord(searchWord);
        }

        pxy.print("누른 페이지 번호 : " + pageNumber);

        pager.setNowPage(pxy.integer(pageNumber));
        pager.setBlockSize(5);
        pager.setPageSize(5);

        pager.paging();
        IFunction<Pager, List<ReviewDTO>> f = p -> reviewMapper.selectReviews(p);
        List<ReviewDTO> list = f.apply(pager);
        pxy.print("------------");
        for(ReviewDTO m : list){
            pxy.print(m.toString());
        }
        box.clear();
        box.put("pager", pager);
        box.put("list", list);
        return box.get();
    }
    @GetMapping("/")
    public Map<?, ?> list(){

        pager.setBlockSize(5);
        pager.setPageSize(5);

        pager.paging();
        IFunction<Pager, List<ReviewDTO>> f = p -> reviewMapper.selectReviews(p);
        List<ReviewDTO> list = f.apply(pager);
        pxy.print("------------");
        for(ReviewDTO m : list){
            pxy.print(m.toString());
        }
        box.clear();
        box.put("pager", pager);
        box.put("list", list);
        return box.get();
    }
    @GetMapping("/{searchWord}")
    public ReviewDTO detail(@PathVariable("searchWord") String searchWord){
        return reviewMapper.selectReview(searchWord);
    }

}