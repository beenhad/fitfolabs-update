import Link from "next/link";
import React from "react";

const SiteLogo = () => {
  return (
    <Link href={"/"}>
      <svg
        className="w-full h-full"
        viewBox="0 0 208 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.2393 17.674C43.1882 17.1584 42.9688 16.7578 42.581 16.4723C42.1932 16.1868 41.6669 16.044 41.0021 16.044C40.5504 16.044 40.169 16.108 39.858 16.2358C39.5469 16.3594 39.3082 16.532 39.142 16.7536C38.9801 16.9751 38.8991 17.2266 38.8991 17.5078C38.8906 17.7422 38.9396 17.9467 39.0462 18.1214C39.157 18.2962 39.3082 18.4474 39.5 18.5753C39.6918 18.6989 39.9134 18.8075 40.1648 18.9013C40.4162 18.9908 40.6847 19.0675 40.9702 19.1314L42.1463 19.4126C42.7173 19.5405 43.2415 19.7109 43.7188 19.924C44.196 20.1371 44.6094 20.3991 44.9588 20.7102C45.3082 21.0213 45.5788 21.3878 45.7706 21.8097C45.9666 22.2315 46.0668 22.7152 46.071 23.2607C46.0668 24.0618 45.8622 24.7564 45.4574 25.3445C45.0568 25.9283 44.4773 26.3821 43.7188 26.706C42.9645 27.0256 42.0547 27.1854 40.9893 27.1854C39.9325 27.1854 39.0121 27.0234 38.228 26.6996C37.4482 26.3757 36.8388 25.8963 36.3999 25.2614C35.9652 24.6222 35.7372 23.8317 35.7159 22.8899H38.3942C38.424 23.3288 38.5497 23.6953 38.7713 23.9893C38.9972 24.2791 39.2976 24.4986 39.6726 24.6477C40.0518 24.7926 40.4801 24.8651 40.9574 24.8651C41.4261 24.8651 41.8331 24.7969 42.1783 24.6605C42.5277 24.5241 42.7983 24.3345 42.9901 24.0916C43.1818 23.8487 43.2777 23.5696 43.2777 23.2543C43.2777 22.9602 43.1903 22.7131 43.0156 22.5128C42.8452 22.3125 42.5938 22.142 42.2614 22.0014C41.9332 21.8608 41.5305 21.733 41.0533 21.6179L39.6278 21.2599C38.5241 20.9915 37.6527 20.5717 37.0135 20.0007C36.3743 19.4297 36.0568 18.6605 36.0611 17.6932C36.0568 16.9006 36.2678 16.2081 36.6939 15.6158C37.1243 15.0234 37.7145 14.5611 38.4645 14.2287C39.2145 13.8963 40.0668 13.7301 41.0213 13.7301C41.9929 13.7301 42.8409 13.8963 43.5653 14.2287C44.294 14.5611 44.8608 15.0234 45.2656 15.6158C45.6705 16.2081 45.8793 16.8942 45.892 17.674H43.2393ZM52.5676 27.1918C51.562 27.1918 50.6969 26.9787 49.9725 26.5526C49.2523 26.1222 48.6983 25.5256 48.3105 24.7628C47.927 24 47.7353 23.1222 47.7353 22.1293C47.7353 21.1236 47.9292 20.2415 48.3169 19.483C48.709 18.7202 49.2651 18.1257 49.9853 17.6996C50.7054 17.2692 51.562 17.054 52.5549 17.054C53.4114 17.054 54.1614 17.2095 54.8049 17.5206C55.4483 17.8317 55.9576 18.2685 56.3326 18.831C56.7076 19.3935 56.9142 20.054 56.9526 20.8125H54.383C54.3105 20.3224 54.1188 19.9283 53.8077 19.63C53.5009 19.3274 53.0982 19.1761 52.5996 19.1761C52.1777 19.1761 51.8091 19.2912 51.4938 19.5213C51.1827 19.7472 50.9398 20.0774 50.7651 20.5121C50.5904 20.9467 50.503 21.473 50.503 22.0909C50.503 22.7173 50.5882 23.25 50.7587 23.6889C50.9334 24.1278 51.1784 24.4624 51.4938 24.6925C51.8091 24.9226 52.1777 25.0376 52.5996 25.0376C52.9107 25.0376 53.1898 24.9737 53.437 24.8459C53.6884 24.718 53.8951 24.5327 54.057 24.2898C54.2232 24.0426 54.3319 23.7464 54.383 23.4013H56.9526C56.91 24.1513 56.7054 24.8118 56.339 25.3828C55.9767 25.9496 55.476 26.3928 54.8368 26.7124C54.1976 27.032 53.4412 27.1918 52.5676 27.1918ZM58.946 27V17.1818H61.5859V18.8949H61.6882C61.8672 18.2855 62.1676 17.8253 62.5895 17.5142C63.0114 17.1989 63.4972 17.0412 64.0469 17.0412C64.1832 17.0412 64.3303 17.0497 64.4879 17.0668C64.6456 17.0838 64.7841 17.1072 64.9034 17.1371V19.5533C64.7756 19.5149 64.5987 19.4808 64.3729 19.451C64.147 19.4212 63.9403 19.4062 63.7528 19.4062C63.3523 19.4062 62.9943 19.4936 62.679 19.6683C62.3679 19.8388 62.1207 20.0774 61.9375 20.3842C61.7585 20.6911 61.669 21.0447 61.669 21.4453V27H58.946ZM70.5787 27.1918C69.5687 27.1918 68.6994 26.9872 67.9707 26.5781C67.2463 26.1648 66.688 25.581 66.296 24.8267C65.9039 24.0682 65.7079 23.1712 65.7079 22.1357C65.7079 21.1257 65.9039 20.2393 66.296 19.4766C66.688 18.7138 67.2399 18.1193 67.9515 17.6932C68.6674 17.267 69.5069 17.054 70.47 17.054C71.1177 17.054 71.7207 17.1584 72.2789 17.3672C72.8414 17.5717 73.3315 17.8807 73.7491 18.294C74.171 18.7074 74.4991 19.2273 74.7335 19.8537C74.9679 20.4759 75.0851 21.2045 75.0851 22.0398V22.7876H66.7946V21.1001H72.5218C72.5218 20.7081 72.4366 20.3608 72.2662 20.0582C72.0957 19.7557 71.8592 19.5192 71.5566 19.3487C71.2583 19.174 70.911 19.0866 70.5147 19.0866C70.1014 19.0866 69.7349 19.1825 69.4153 19.3743C69.1 19.5618 68.8528 19.8153 68.6738 20.1349C68.4949 20.4503 68.4032 20.8018 68.399 21.1896V22.794C68.399 23.2798 68.4885 23.6996 68.6674 24.0533C68.8507 24.407 69.1085 24.6797 69.4409 24.8714C69.7733 25.0632 70.1674 25.1591 70.6234 25.1591C70.926 25.1591 71.2029 25.1165 71.4544 25.0312C71.7058 24.946 71.921 24.8182 72.1 24.6477C72.2789 24.4773 72.4153 24.2685 72.5091 24.0213L75.0275 24.1875C74.8997 24.7926 74.6376 25.321 74.2413 25.7727C73.8493 26.2202 73.3422 26.5696 72.72 26.821C72.1021 27.0682 71.3883 27.1918 70.5787 27.1918ZM81.5865 27.1918C80.5765 27.1918 79.7072 26.9872 78.9785 26.5781C78.2541 26.1648 77.6958 25.581 77.3038 24.8267C76.9118 24.0682 76.7157 23.1712 76.7157 22.1357C76.7157 21.1257 76.9118 20.2393 77.3038 19.4766C77.6958 18.7138 78.2477 18.1193 78.9593 17.6932C79.6752 17.267 80.5147 17.054 81.4778 17.054C82.1255 17.054 82.7285 17.1584 83.2868 17.3672C83.8493 17.5717 84.3393 17.8807 84.7569 18.294C85.1788 18.7074 85.5069 19.2273 85.7413 19.8537C85.9757 20.4759 86.0929 21.2045 86.0929 22.0398V22.7876H77.8024V21.1001H83.5297C83.5297 20.7081 83.4444 20.3608 83.274 20.0582C83.1035 19.7557 82.867 19.5192 82.5645 19.3487C82.2662 19.174 81.9189 19.0866 81.5226 19.0866C81.1092 19.0866 80.7427 19.1825 80.4231 19.3743C80.1078 19.5618 79.8606 19.8153 79.6816 20.1349C79.5027 20.4503 79.411 20.8018 79.4068 21.1896V22.794C79.4068 23.2798 79.4963 23.6996 79.6752 24.0533C79.8585 24.407 80.1163 24.6797 80.4487 24.8714C80.7811 25.0632 81.1752 25.1591 81.6312 25.1591C81.9338 25.1591 82.2108 25.1165 82.4622 25.0312C82.7136 24.946 82.9288 24.8182 83.1078 24.6477C83.2868 24.4773 83.4231 24.2685 83.5169 24.0213L86.0353 24.1875C85.9075 24.7926 85.6454 25.321 85.2491 25.7727C84.8571 26.2202 84.35 26.5696 83.7278 26.821C83.1099 27.0682 82.3961 27.1918 81.5865 27.1918ZM90.8429 21.3239V27H88.1199V17.1818H90.715V18.9141H90.8301C91.0474 18.343 91.4118 17.8913 91.9231 17.5589C92.4345 17.2223 93.0545 17.054 93.7832 17.054C94.465 17.054 95.0595 17.2031 95.5666 17.5014C96.0737 17.7997 96.4679 18.2259 96.7491 18.7798C97.0304 19.3295 97.171 19.9858 97.171 20.7486V27H94.448V21.2344C94.4522 20.6335 94.2988 20.1648 93.9877 19.8281C93.6767 19.4872 93.2484 19.3168 92.7029 19.3168C92.3365 19.3168 92.0126 19.3956 91.7314 19.5533C91.4544 19.7109 91.237 19.9411 91.0794 20.2436C90.926 20.5419 90.8471 20.902 90.8429 21.3239ZM99.5671 30.6818V17.1818H102.252V18.831H102.373C102.493 18.5668 102.665 18.2983 102.891 18.0256C103.121 17.7486 103.419 17.5185 103.786 17.3352C104.157 17.1477 104.617 17.054 105.167 17.054C105.882 17.054 106.543 17.2415 107.148 17.6165C107.753 17.9872 108.237 18.5476 108.599 19.2976C108.961 20.0433 109.142 20.9787 109.142 22.1037C109.142 23.1989 108.966 24.1236 108.612 24.8778C108.262 25.6278 107.785 26.1967 107.18 26.5845C106.579 26.968 105.906 27.1598 105.16 27.1598C104.632 27.1598 104.182 27.0724 103.811 26.8977C103.445 26.723 103.145 26.5036 102.91 26.2393C102.676 25.9709 102.497 25.7003 102.373 25.4276H102.29V30.6818H99.5671ZM102.233 22.0909C102.233 22.6747 102.314 23.1839 102.475 23.6186C102.637 24.0533 102.872 24.392 103.179 24.6349C103.485 24.8736 103.858 24.9929 104.297 24.9929C104.74 24.9929 105.115 24.8714 105.422 24.6286C105.729 24.3814 105.961 24.0405 106.119 23.6058C106.281 23.1669 106.362 22.6619 106.362 22.0909C106.362 21.5241 106.283 21.0256 106.125 20.5952C105.968 20.1648 105.735 19.8281 105.429 19.5852C105.122 19.3423 104.745 19.2209 104.297 19.2209C103.854 19.2209 103.479 19.3381 103.172 19.5724C102.87 19.8068 102.637 20.1392 102.475 20.5696C102.314 21 102.233 21.5071 102.233 22.0909ZM111.208 27V17.1818H113.848V18.8949H113.95C114.129 18.2855 114.429 17.8253 114.851 17.5142C115.273 17.1989 115.759 17.0412 116.309 17.0412C116.445 17.0412 116.592 17.0497 116.75 17.0668C116.907 17.0838 117.046 17.1072 117.165 17.1371V19.5533C117.037 19.5149 116.86 19.4808 116.635 19.451C116.409 19.4212 116.202 19.4062 116.015 19.4062C115.614 19.4062 115.256 19.4936 114.941 19.6683C114.63 19.8388 114.382 20.0774 114.199 20.3842C114.02 20.6911 113.931 21.0447 113.931 21.4453V27H111.208ZM118.823 27V17.1818H121.546V27H118.823ZM120.191 15.9162C119.786 15.9162 119.439 15.782 119.149 15.5135C118.863 15.2408 118.721 14.9148 118.721 14.5355C118.721 14.1605 118.863 13.8388 119.149 13.5703C119.439 13.2976 119.786 13.1612 120.191 13.1612C120.596 13.1612 120.941 13.2976 121.226 13.5703C121.516 13.8388 121.661 14.1605 121.661 14.5355C121.661 14.9148 121.516 15.2408 121.226 15.5135C120.941 15.782 120.596 15.9162 120.191 15.9162ZM126.7 21.3239V27H123.977V17.1818H126.572V18.9141H126.688C126.905 18.343 127.269 17.8913 127.781 17.5589C128.292 17.2223 128.912 17.054 129.641 17.054C130.322 17.054 130.917 17.2031 131.424 17.5014C131.931 17.7997 132.325 18.2259 132.607 18.7798C132.888 19.3295 133.028 19.9858 133.028 20.7486V27H130.305V21.2344C130.31 20.6335 130.156 20.1648 129.845 19.8281C129.534 19.4872 129.106 19.3168 128.56 19.3168C128.194 19.3168 127.87 19.3956 127.589 19.5533C127.312 19.7109 127.094 19.9411 126.937 20.2436C126.783 20.5419 126.705 20.902 126.7 21.3239ZM140.647 17.1818V19.2273H134.734V17.1818H140.647ZM136.077 14.8295H138.8V23.983C138.8 24.2344 138.838 24.4304 138.915 24.571C138.991 24.7074 139.098 24.8033 139.234 24.8587C139.375 24.9141 139.537 24.9418 139.72 24.9418C139.848 24.9418 139.976 24.9311 140.104 24.9098C140.231 24.8842 140.329 24.8651 140.398 24.8523L140.826 26.8786C140.689 26.9212 140.498 26.9702 140.251 27.0256C140.003 27.0852 139.703 27.1214 139.349 27.1342C138.693 27.1598 138.118 27.0724 137.623 26.8722C137.133 26.6719 136.752 26.3608 136.479 25.9389C136.206 25.517 136.072 24.9844 136.077 24.3409V14.8295ZM150.717 19.9815L148.224 20.1349C148.181 19.9219 148.089 19.7301 147.949 19.5597C147.808 19.3849 147.623 19.2464 147.393 19.1442C147.167 19.0376 146.896 18.9844 146.581 18.9844C146.159 18.9844 145.803 19.0739 145.513 19.2528C145.224 19.4276 145.079 19.6619 145.079 19.956C145.079 20.1903 145.173 20.3885 145.36 20.5504C145.548 20.7124 145.869 20.8423 146.325 20.9403L148.102 21.2983C149.057 21.4943 149.768 21.8097 150.237 22.2443C150.706 22.679 150.94 23.25 150.94 23.9574C150.94 24.6009 150.751 25.1655 150.371 25.6513C149.996 26.1371 149.481 26.5163 148.825 26.7891C148.173 27.0575 147.42 27.1918 146.568 27.1918C145.268 27.1918 144.233 26.9212 143.462 26.38C142.695 25.8345 142.245 25.093 142.113 24.1555L144.791 24.0149C144.872 24.4112 145.068 24.7138 145.379 24.9226C145.69 25.1271 146.089 25.2294 146.575 25.2294C147.052 25.2294 147.435 25.1378 147.725 24.9545C148.019 24.767 148.168 24.5263 148.173 24.2322C148.168 23.9851 148.064 23.7827 147.859 23.625C147.655 23.4631 147.339 23.3395 146.913 23.2543L145.213 22.9155C144.254 22.7237 143.54 22.3913 143.072 21.9183C142.607 21.4453 142.375 20.8423 142.375 20.1094C142.375 19.4787 142.545 18.9354 142.886 18.4794C143.232 18.0234 143.715 17.6719 144.337 17.4247C144.964 17.1776 145.697 17.054 146.536 17.054C147.776 17.054 148.752 17.3161 149.464 17.8402C150.18 18.3643 150.597 19.0781 150.717 19.9815ZM154.497 27.1662C154.075 27.1662 153.713 27.017 153.41 26.7188C153.112 26.4162 152.963 26.054 152.963 25.6321C152.963 25.2145 153.112 24.8565 153.41 24.5582C153.713 24.2599 154.075 24.1108 154.497 24.1108C154.906 24.1108 155.264 24.2599 155.57 24.5582C155.877 24.8565 156.031 25.2145 156.031 25.6321C156.031 25.9134 155.958 26.1712 155.813 26.4055C155.673 26.6357 155.487 26.821 155.257 26.9616C155.027 27.098 154.774 27.1662 154.497 27.1662ZM160.792 17.1818L162.594 20.6143L164.442 17.1818H167.235L164.391 22.0909L167.312 27H164.531L162.594 23.6058L160.69 27H157.877L160.792 22.0909L157.979 17.1818H160.792ZM170.783 30.6818C170.438 30.6818 170.114 30.6541 169.812 30.5987C169.513 30.5476 169.266 30.4815 169.07 30.4006L169.684 28.3679C170.004 28.4659 170.291 28.5192 170.547 28.5277C170.807 28.5362 171.031 28.4766 171.218 28.3487C171.41 28.2209 171.565 28.0036 171.685 27.6967L171.844 27.2812L168.322 17.1818H171.186L173.219 24.392H173.321L175.373 17.1818H178.256L174.44 28.0611C174.256 28.5895 174.007 29.0497 173.692 29.4418C173.381 29.8381 172.987 30.1428 172.509 30.3558C172.032 30.5732 171.457 30.6818 170.783 30.6818ZM179.848 27V25.3764L184.655 19.4254V19.3551H180.014V17.1818H187.934V18.9524L183.421 24.7564V24.8267H188.1V27H179.848Z"
          fill="#F0F2F8"
        />
        <g clipPath="url(#clip0_29_2848)">
          <path
            d="M6.6547 10.7534C7.58285 10.8685 8.50376 11.1676 9.36468 11.6646C12.8084 13.6528 13.9883 18.0563 12 21.5C10.0118 18.0563 5.60838 16.8764 2.16468 18.8646C1.305 19.361 0.586402 20.0078 0.0229492 20.7527C0.292577 16.3647 2.92032 12.6144 6.6547 10.7534Z"
            fill="#FFD600"
          />
          <path
            d="M0.0228934 20.7526C0.586346 20.0078 1.30494 19.361 2.16462 18.8646C5.60832 16.8764 10.0118 18.0563 12 21.5C8.02355 21.5 4.8 24.7235 4.8 28.7C4.8 29.6932 5.00112 30.6395 5.36485 31.5003C2.13121 29.3505 0 25.6741 0 21.5C0 21.249 0.00770568 20.9998 0.0228934 20.7526Z"
            fill="#1BC47D"
          />
          <path
            d="M5.3649 31.5003C5.00117 30.6395 4.80005 29.6932 4.80005 28.7C4.80005 24.7235 8.0236 21.5 12 21.5C10.0118 24.9437 11.1917 29.3472 14.6354 31.3354C15.4963 31.8324 16.4172 32.1315 17.3454 32.2467C15.7358 33.0488 13.9206 33.5 12 33.5C9.54676 33.5 7.26542 32.7638 5.3649 31.5003Z"
            fill="#18A0FB"
          />
          <path
            d="M17.3453 32.2467C16.4172 32.1315 15.4963 31.8324 14.6354 31.3354C11.1917 29.3472 10.0118 24.9437 12 21.5C13.9882 24.9437 18.3917 26.1236 21.8354 24.1354C22.695 23.6391 23.4136 22.9922 23.9771 22.2474C23.7075 26.6353 21.0797 30.3856 17.3453 32.2467Z"
            fill="#7B61FF"
          />
          <path
            d="M23.9771 22.2473C23.4137 22.9922 22.6951 23.639 21.8354 24.1354C18.3917 26.1236 13.9882 24.9437 12 21.5C15.9765 21.5 19.2 18.2764 19.2 14.3C19.2 13.3068 18.9989 12.3605 18.6351 11.4997C21.8688 13.6495 24 17.3259 24 21.5C24 21.751 23.9923 22.0002 23.9771 22.2473Z"
            fill="#F24822"
          />
          <path
            d="M18.635 11.4997C18.9988 12.3605 19.1999 13.3068 19.1999 14.3C19.1999 18.2765 15.9764 21.5 11.9999 21.5C13.9881 18.0563 12.8082 13.6528 9.36452 11.6646C8.5036 11.1676 7.58269 10.8685 6.65454 10.7533C8.26414 9.95118 10.0793 9.5 11.9999 9.5C14.4532 9.5 16.7345 10.2362 18.635 11.4997Z"
            fill="#F97F0F"
          />
        </g>
        <defs>
          <clipPath id="clip0_29_2848">
            <rect
              width={24}
              height={24}
              fill="white"
              transform="translate(0 9.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

export default SiteLogo;