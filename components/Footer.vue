<template>
  <div id="footer">
    <!-- <div class="shadow"></div> -->
    <div class="footer_info">
      <p class="author">
        <a href="https://www.yuque.com/fredliang/refine">Designed</a> &amp;
        <a href="https://github.com/fredliang44/site">Coded</a>
        With ❤️ by <a href="https://lzb.im">Fred Liang</a>
      </p>
      <p class="powered_by">
        Powered By
        <a
          rel="noreferrer noopener"
          href="https://let.sh"
          title="powerby"
          target="_blank"
          >let.sh</a
        >
      </p>
      <div class="my_socials">
        <a
          rel="noreferrer noopener"
          href="https://www.facebook.com/profile.php?id=100015539800123"
          title="facebook"
          target="_blank"
          ><i class="remixicon-facebook-fill"></i></a
        ><a
          rel="noreferrer noopener"
          href="https://www.github.com/fredliang44"
          title="github"
          target="_blank"
          ><i class="remixicon-github-fill"></i></a
        ><a
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/liangzhibo/"
          title="linkedin"
          target="_blank"
          ><i class="remixicon-linkedin-fill"></i></a
        ><a
          rel="noreferrer noopener"
          href="https://assets.srv.work/Wechat-QRCode.jpeg"
          title="wechat"
          target="_blank"
          ><i class="remixicon-wechat-fill"></i></a
        ><a
          href="https://blog.fredliang.cn/feed.xml"
          type="application/rss+xml"
          title="rss"
          target="_blank"
          ><i class="remixicon-rss-fill"></i
        ></a>
      </div>
      <p class="beian">
        <a
          rel="noreferrer noopener"
          href="http://www.beian.miit.gov.cn"
          title="beian"
          target="_blank"
          >京ICP备16033945号</a
        >
      </p>
      <div id="notify">
        <div class="notify_wrapper"><p id="notify_content"></p></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
}
</script>

<style lang="less">
.dark {
  #footer {
    background-color: black;
  }
}

.shadow {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      circle at 56% 116%,
      hsla(199.10000000000002, 100%, 50%, 0.2) 9%,
      hsla(31.69999999999999, 52.7%, 33.1%, 0) 65%
    ),
    radial-gradient(
      circle at 68% 151%,
      hsla(216, 100%, 50%, 0.2) 8%,
      hsla(0, 0%, 0%, 0) 60%
    ),
    radial-gradient(
      circle at 44% 200%,
      hsla(223.70000000000005, 100%, 38.2%, 1) 23%,
      hsla(0, 0%, 100%, 0) 65%
    );
}
#footer {
  z-index: -100;
  width: 100%;
  overflow: hidden;
  clear: both;
  text-align: center;
  min-height: 18vh;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

  p {
    font-family: product sans, google sans, Roboto, Arial, Helvetica, sans-serif;
    font-size: 18px;
    letter-spacing: 0;
    text-align: center;

    a {
      transition-duration: 0.2s;
      font-family: product sans, google sans, Roboto, Arial, Helvetica,
        sans-serif;
      font-weight: 700;
    }
  }
  .footer_info {
    width: 100%;
  }
  .powered_by {
    font-size: 16px;
  }
  .beian a {
    margin-top: 2px;
    font-size: 13px;
    font-weight: 700;
    font-family: noto serif, noto serif cjk tc, source han serif tc, songti tc,
      serif;
    letter-spacing: 1px;
  }
}
</style>
