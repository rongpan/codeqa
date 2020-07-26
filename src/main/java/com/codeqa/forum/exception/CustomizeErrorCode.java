package com.codeqa.forum.exception;

public enum CustomizeErrorCode implements ICustomizeErrorCode {

    QUESTION_NOT_FOUND(2001,"Question not found"),
    TARGET_PARAM_NOT_FOUND(2002, "no selection for question or comment"),
    NO_LOGIN(2003, "login required"),
    SYS_ERROR(2004, "try again later"),
    TYPE_PARAM_WRONG(2005, "wrong type of comment"),
    COMMENT_NOT_FOUND(2006, "comment does not exist"),
    CONTENT_IS_EMPTY(2007, "input can not be empty"),
    ;

    @Override
    public String getMessage() {
        return message;
    }

    @Override
    public Integer getCode() {
        return code;
    }

    private Integer code;
    private String message;

    CustomizeErrorCode(Integer code, String message) {
        this.message = message;
        this.code = code;
    }

}