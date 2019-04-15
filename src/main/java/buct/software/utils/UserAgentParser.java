package buct.software.utils;

import lombok.Data;

/**
 * @author 高谦
 * 简介: 用于解析 浏览器的User-Agent 对象的简单工具类
 */

@Data
public class UserAgentParser {
    public static  String Android="Mozilla/5.0 (Linux; Android 7.0; JMM-AL00) " +
            "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 " +
            "Mobile Safari/537.36";
    public static  String Windows="Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
            "AppleWebKit/537.36 (KHTML, like Gecko) " +
            "Chrome/72.0.3626.121 Safari/537.36";

    private String url;
    private String system;
    private String platform;
    private String[] parms;
    public UserAgentParser(String url){
        this.url=url;
        parms=this.url.split(" ");
        if(parms.length<2){
            this.url=Windows;
            parms=this.url.split(" ");
        }
    }

    /**
     * 得到浏览器所在的平台：Android ， windows NT
     * @return 返回平台 {"NT","Android"}
     */
    public String getPlatform(){
        return this.parms[2];
    }

    /**
     * 返回系统类型： Windows，Linux
     * @return {"Windows","Linux"}
     */
    public String getSystem(){
        String sys=this.parms[1].substring(1);
        return sys;
    }
}
