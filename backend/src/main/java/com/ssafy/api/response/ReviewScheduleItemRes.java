package com.ssafy.api.response;

import lombok.Getter;

import java.util.List;

@Getter
public class ReviewScheduleItemRes {
    private MypageCommonInfo mypageCommonInfo;
    private List<ReviewScheduleItem> reviewScheduleItemList;

    public ReviewScheduleItemRes(MypageCommonInfo mypageCommonInfo, List<ReviewScheduleItem> reviewScheduleItemList) {
        this.mypageCommonInfo = mypageCommonInfo;
        this.reviewScheduleItemList = reviewScheduleItemList;
    }
}
