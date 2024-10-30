$(function () {
  //*** nav 的高度設定
  // const up_height =
  //   Math.floor(Number($(".starttea .store_title .up").height())) + 51;
  // console.log($(".starttea .store_title .up").height());
  // $(".starttea .store_title").css({ height: up_height });

  //------------------------------------

  //*** 頁首照片輪播 (網頁)
  // let n = 2;
  // setInterval(function () {
  //   function turnOpacity(t_n) {
  //     if ($(".starttea .store img").eq(t_n).attr("class", "light")) {
  //       $(".starttea .store img").eq(t_n).removeClass("light");
  //       $(".starttea .store img").eq(t_n).addClass("dark");
  //     }
  //   }
  //   if (n == -1) {
  //     n = 2;
  //   }
  //   if (n == 2) {
  //     turnOpacity(0);
  //     $(".starttea .store img").eq(n).toggleClass("light");
  //   }
  //   if (n == 1) {
  //     // console.log("1");
  //     $(".starttea .store img").eq(n).toggleClass("light");
  //   }
  //   if (n == 0) {
  //     turnOpacity(2);
  //     turnOpacity(1);
  //     $(".starttea .store img").eq(n).toggleClass("light");
  //   }
  //   n--;
  // }, 2000);

  // *****兩張圖片輪播 (fadein/out)
  // setInterval(function () {
  //   $(".starttea .store img").eq(1).toggleClass("light");
  // }, 2000);
  // *****兩張圖片輪播 (fadein/out)

  //*** 頁首照片輪播
  // let n = 2;
  // setInterval(function () {
  //   function turnOpacity(t_n) {
  //     if ($(".starttea .store img").eq(t_n).attr("class", "light")) {
  //       $(".starttea .store img").eq(t_n).removeClass("light");
  //       $(".starttea .store img").eq(t_n).addClass("dark");
  //     }
  //   }
  //   if (n == -1) {
  //     n = 2;
  //   }
  //   if (n == 2) {
  //     // console.log("2");
  //     // if ($(".starttea .store img").eq(0).attr("class", "light")) {
  //     //   $(".starttea .store img").eq(0).removeClass("light");
  //     //   $(".starttea .store img").eq(0).addClass("dark");
  //     // }
  //     turnOpacity(0);
  //     $(".starttea .store img").eq(n).toggleClass("light");
  //   }
  //   if (n == 1) {
  //     // console.log("1");
  //     $(".starttea .store img").eq(n).toggleClass("light");
  //   }
  //   if (n == 0) {
  //     // console.log("0");
  //     // if ($(".starttea .store img").eq(2).attr("class", "light")) {
  //     //   $(".starttea .store img").eq(2).removeClass("light");
  //     //   $(".starttea .store img").eq(2).addClass("dark");
  //     // }
  //     // if ($(".starttea .store img").eq(1).attr("class", "light")) {
  //     //   $(".starttea .store img").eq(1).removeClass("light");
  //     //   $(".starttea .store img").eq(1).addClass("dark");
  //     // }
  //     turnOpacity(2);
  //     turnOpacity(1);
  //     $(".starttea .store img").eq(n).toggleClass("light");
  //   }
  //   n--;
  //   // if (n == 1 && true) {
  //   //   $(".starttea .store img").eq(2).toggleClass("light");
  //   //   $(".starttea .store img").eq(1).toggleClass("light");
  //   //   j = false;
  //   // }
  //   // if (n == 0) {
  //   //   n = 2;
  //   //   j = true;
  //   //   $(".starttea .store img").eq(1).toggleClass("light");
  //   // }
  //   // $(".starttea .store img").eq(n).toggleClass("light");
  //   // n--;
  //   // console.log(n);
  // }, 2000);

  // function moveStore() {
  //   // 回傳 "0px"、"-960px"、"-1920px"
  //   let imgMarginLeft = $(".starttea img.store1").css("margin-left");
  //   // 根據 imgMarginLeft 的字數length，做出 margin-left 調整
  //   if (Number(imgMarginLeft.length) > 6) {
  //     // "-1920px" 第三張照片，需移至第一張
  //     $(".starttea .store img.store1").animate(
  //       {
  //         marginLeft: "0",
  //       },
  //       500
  //     );
  //   } else if (
  //     Number(imgMarginLeft.length) > 3 &&
  //     Number(imgMarginLeft.length) < 7
  //   ) {
  //     // "-920px" 第二張照片，需移至第三張
  //     $(".starttea .store img.store1").animate(
  //       {
  //         marginLeft: "-1920",
  //       },
  //       500
  //     );
  //   } else if (Number(imgMarginLeft.length) === 3) {
  //     // "0px" 第一張照片，需移至第二張
  //     $(".starttea .store img.store1").animate(
  //       {
  //         marginLeft: "-960",
  //       },
  //       500
  //     );
  //   }
  // }
  // setInterval(moveStore, 2700);

  //*** 點擊 Menu 圖示
  $(".starttea .store_title .up .menu").on("click", function () {
    console.log("in");
    $(".starttea .open_menu").css({
      display: "block",
    });
  });

  //*** 關 open menu
  $(".starttea .open_menu").on("click", "div", function () {
    if ($(this).attr("class") === "close" || $(this).attr("class") === "item") {
      $(".starttea .open_menu").css({
        display: "none",
      });
    }
  });

  //*** 點擊菜單，顯示菜單圖片
  function openMenu() {
    $(".starttea .starttea_menu").css({
      display: "block",
    });
    $(".starttea .starttea_menu .menu_close").css({
      display: "block",
    });
    $(".starttea .store").css({ display: "none" });
    $(".starttea .store_title").css({ display: "none" });
    $(".starttea .message").css({ display: "none" });
    $(".starttea .product").css({ display: "none" });
    $(".starttea .where").css({ display: "none" });
    $(".starttea .history").css({ display: "none" });
    $(".starttea .footer").css({ display: "none" });
  }
  // 以下 3 個地方打開菜單圖片
  $(".starttea .open_menu .item .menu").on("click", function () {
    // console.log("123");
    openMenu();
  });
  $(
    ".starttea .where .where_block .where_detail .down .where_text .other .where_store_menu"
  ).on("click", function () {
    // console.log("123");
    openMenu();
  });
  $(".starttea .product .menu_btn").on("click", function () {
    // console.log("123");
    openMenu();
  });

  //*** 點擊 menu_close，關閉菜單圖片
  $(".starttea .starttea_menu .menu_close").on("click", function () {
    // console.log("123");
    $(".starttea .starttea_menu").css({
      display: "none",
    });
    $(".starttea .starttea_menu .menu_close").css({
      display: "none",
    });
    $(".starttea .store").css({ display: "block" });
    $(".starttea .store_title").css({ display: "block" });
    $(".starttea .message").css({ display: "block" });
    $(".starttea .product").css({ display: "block" });
    $(".starttea .where").css({ display: "block" });
    $(".starttea .history").css({ display: "block" });
    $(".starttea .footer").css({ display: "block" });
  });

  //*** 點擊快訊圖片，顯示詳細圖片
  $(".starttea .message").on("click", "img", function () {
    // 顯示詳細活動圖片
    function openDetail() {
      $(".starttea .open_message .close").css({
        display: "block",
      });
    }
    // 顯示關閉圖案
    function openMessageBlock() {
      $(".starttea .open_message").css({
        display: "block",
      });
    }
    // 關閉 store, store_title, message, product, where, history, footer
    function closeOtherBlock() {
      $(".starttea .store").css({ display: "none" });
      $(".starttea .store_title").css({ display: "none" });
      $(".starttea .message").css({ display: "none" });
      $(".starttea .product").css({ display: "none" });
      $(".starttea .where").css({ display: "none" });
      $(".starttea .history").css({ display: "none" });
      $(".starttea .footer").css({ display: "none" });
    }

    // 第一張活動圖片
    if ($(this).attr("id") === "message1") {
      closeOtherBlock();
      openMessageBlock();
      openDetail();
      let img = `
        <img
          src="./images/action/芒果詳細.png"
          alt="message image detail"
        />
      `;
      $(".starttea .open_message").append(img);
      // 第二張活動圖片
    } else if ($(this).attr("id") === "message2") {
      closeOtherBlock();
      openMessageBlock();
      openDetail();
      let img = `
        <img
          src="./images/action/泰雙享詳細.png"
          alt="message image detail"
        />
      `;
      $(".starttea .open_message").append(img);
      // 第三張活動圖片
    } else if ($(this).attr("id") === "message3") {
      closeOtherBlock();
      openMessageBlock();
      openDetail();
      let img = `
        <img
          src="./images/action/小茶壺詳細.png"
          alt="message image detail"
        />
      `;
      $(".starttea .open_message").append(img);
    }
  });
  //*** 關閉活動詳細圖片
  $(".starttea .open_message .close").on("click", function () {
    // 打開 store, store_title, message, product, where, history, footer
    function openOtherBlock() {
      $(".starttea .store").css({ display: "block" });
      $(".starttea .store_title").css({ display: "block" });
      $(".starttea .message").css({ display: "block" });
      $(".starttea .product").css({ display: "block" });
      $(".starttea .where").css({ display: "block" });
      $(".starttea .history").css({ display: "block" });
      $(".starttea .footer").css({ display: "block" });
    }
    openOtherBlock();
    $(".starttea .open_message").css({
      display: "none",
    });
    /*
    // .css 寫法
    1. 只寫一個 css : $(".xxx").css(display: "block")
                    $(".xxx").css("margin-left": "500px")     
    2. 多個 css : $(".xxx").css({"color": "blue", "text-align": "bold"}) 
    */
    $(".starttea .open_message .close").css({
      display: "none",
    });
    $(".starttea .open_message img").remove();
  });

  //*** product menu btn 顯示
  const thailand_img_top = Math.floor(
    Number($(".starttea .product .thailand_block").offset().top)
  );
  const taiwan_img_top = Math.floor(
    Number($(".starttea .product .taiwan_drink").offset().top)
  );
  $(window).on("scroll", function () {
    // console.log(thailand_img_top);
    // console.log(taiwan_img_top);

    let scrollTop = Math.floor(Number($(window).scrollTop()));
    // console.log(scrollTop);
    if (thailand_img_top < scrollTop && taiwan_img_top > scrollTop) {
      $(".starttea .product .menu_btn").css({ display: "block" });
    }
    // if (taiwan_img_top < scrollTop) {
    //   $(".starttea .product .menu_btn img").css({
    //     position: "relative",
    //   });
    //   // $(".starttea .product .menu_btn img").css({
    //   //   position: "static",
    //   // });
    // }
  });

  //*** 泰式產品移進移出展示
  let k = 1;
  let j = 2;
  let productImg = `
    <img
      src="./images/product/${k}.png"
      alt="thailand drink"
      class="thailand_drink${k}"
    />
    <img
      src="./images/product/${j}.png"
      alt="thailand drink"
      class="thailand_drink${j}"
    />
  `;
  $(".starttea .product .details").append(productImg);
  $(`.starttea .product .thailand_dot .dot1`).addClass("dark");

  function moveProduct() {
    if (k === 4) {
      k = 1;
    }
    if (j === 4) {
      j = 1;
    }
    // 讓 dot 恢復原本灰色
    $(".starttea .product .thailand_dot div").removeClass("dark");

    // 清空子元素
    $(".starttea .product .details").empty();

    // 裝新的子元素
    let productImg = `
    <img
      src="./images/product/${k}.png"
      alt="thailand drink"
      class="thailand_drink${k}"
    />
    <img
      src="./images/product/${j}.png"
      alt="thailand drink"
      class="thailand_drink${j}"
    />
    `;
    $(".starttea .product .details").append(productImg);

    // 第一張 img
    $(`.starttea .product .details .thailand_drink${k}`).animate(
      {
        marginLeft: "-3500",
      },
      2000
    );

    // 第二張 img
    $(`.starttea .product .details .thailand_drink${j}`).animate(
      {
        marginLeft: "-2000",
      },
      3000
    );
    k++;
    j++;

    // dot 上黑色
    if (k === 2) {
      // dot2
      $(`.starttea .product .thailand_dot .dot${k}`).addClass("dark");
    } else if (k === 3) {
      //dot3
      $(`.starttea .product .thailand_dot .dot${k}`).addClass("dark");
    } else if (k === 4) {
      //dot1
      $(`.starttea .product .thailand_dot .dot${k - 3}`).addClass("dark");
    }
  }
  setInterval(moveProduct, 3500);

  //*** 台式產品移進移出展示
  let t = 4;
  let u = 5;
  let productTImg = `
    <img
      src="./images/product/${t}.png"
      alt="taiwan drink"
      class="taiwan_drink${t}"
    />
    <img
      src="./images/product/${u}.png"
      alt="taiwan drink"
      class="taiwan_drink${u}"
    />
  `;
  $(".starttea .product .taiwan_drink").append(productTImg);
  $(`.starttea .product .taiwan_dot .dot4`).addClass("dark");

  function moveTProduct() {
    if (t === 9) {
      t = 4;
    }
    if (u === 9) {
      u = 4;
    }
    // 讓 dot 恢復原本灰色
    $(".starttea .product .taiwan_dot div").removeClass("dark");

    // 清空子元素
    $(".starttea .product .taiwan_drink").empty();

    // 裝新的子元素
    let productTImg = `
    <img
      src="./images/product/${t}.png"
      alt="taiwan drink"
      class="taiwan_drink${t}"
    />
    <img
      src="./images/product/${u}.png"
      alt="taiwan drink"
      class="taiwan_drink${u}"
    />
    `;
    $(".starttea .product .taiwan_drink").append(productTImg);

    // 第一張 img
    $(`.starttea .product .taiwan_drink .taiwan_drink${t}`).animate(
      {
        marginLeft: "-3500",
      },
      2000
    );

    // 第二張 img
    $(`.starttea .product .taiwan_drink .taiwan_drink${u}`).animate(
      {
        marginLeft: "-2000",
      },
      3000
    );
    t++;
    u++;

    // dot 上黑色
    if (t === 5) {
      // dot4
      $(`.starttea .product .taiwan_dot .dot${t}`).addClass("dark");
    } else if (t === 6) {
      //dot5
      $(`.starttea .product .taiwan_dot .dot${t}`).addClass("dark");
    } else if (t === 7) {
      //dot6
      $(`.starttea .product .taiwan_dot .dot${t}`).addClass("dark");
    } else if (t === 8) {
      //dot7
      $(`.starttea .product .taiwan_dot .dot${t}`).addClass("dark");
    } else if (t === 9) {
      //dot8
      $(`.starttea .product .taiwan_dot .dot${t - 5}`).addClass("dark");
    }
  }
  setInterval(moveTProduct, 3500);

  //*** 青史留名更改圖片透明度
  $(".starttea .history .history_image .block img").on(
    "mouseover",
    function () {
      $(this).removeClass("light");
      $(this).addClass("dark");
    }
  );
  $(".starttea .history .history_image .block img").on("mouseout", function () {
    $(this).removeClass("dark");
    $(this).addClass("light");
  });

  // .offset().top 方法為得知某元素至 body 頂端的距離
  // const product_screenHeightStart = $(".starttea .product").offset().top;
  // const product_screenHeightEnd = $(".starttea .where").offset().top;

  // 捲軸事件
  // $(window).on("scroll", function () {
  //   // console.log($(window).scrollTop());

  //   // scrollTop 方法為得知卷軸至 body 頂端的距離 (滾動至下方時)
  //   const scrollTop = $(window).scrollTop();
  //   if (
  //     Math.floor(Number(scrollTop)) >=
  //       Math.floor(Number(product_screenHeightStart)) &&
  //     Math.floor(Number(scrollTop)) <=
  //       Math.floor(Number(product_screenHeightEnd))
  //   ) {
  //     console.log("yes");
  //   }
  // });
  ///------------------------------------------
  // const message_screenTop =
  // Math.floor(Number($(".starttea .message").offset().top)) - 80;
  // Math.floor(Number($(".starttea .message_title").offset().top));
  //*** 主選單變換樣式設定
  // $(window).on("scroll", function () {
  //   let scrollTop = Math.floor(Number($(window).scrollTop()));
  //   if (scrollTop >= message_screenTop) {
  //     console.log(">=");
  //     $(".starttea .store_title .line").addClass("remove");
  //     $(".starttea .store_title").addClass("add_color");
  //   }
  //   if (scrollTop < message_screenTop) {
  //     console.log("<");
  //     $(".starttea .store_title .line").removeClass("remove");
  //     $(".starttea .store_title").removeClass("add_color");
  //   }
  // });

  // console.log($(window).height());

  // 查看元件的高度，括號內不加值 : 含padding、border
  // 查看元件的高度，括號內部家true : 含padding、border 及 margin
  // 查看元件高度，不含 paddin、border、margin : .height()
  // https://icguanyu.github.io/jquery/getsize/
  // console.log($(".starttea .store_title").outerHeight(true));

  const message_screenTop = Math.floor(
    Number($(".starttea .message_title").offset().top)
  );
  // const nav_height = $(".starttea .store_title").outerHeight(true);

  $(window).on("scroll", function () {
    // console.log($(".starttea .message_title").position().top);
    let scrollTop = Math.floor(Number($(window).scrollTop()));
    if (scrollTop >= message_screenTop) {
      $(".starttea .store_title").addClass("add_color");
      $(".starttea .store_title .line").addClass("remove");
    } else {
      $(".starttea .store_title").removeClass("add_color");
      $(".starttea .store_title .line").removeClass("remove");
    }
  });
});
