import React, { Component } from 'react'
import styled from 'styled-components'


const StarContainer = styled.div`
  height: 100%;
  width: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  
`
const StarsOne = styled.div`
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 1226px 1621px #FFF , 1021px 1311px #FFF , 589px 396px #FFF , 106px 950px #FFF , 1628px 685px #FFF , 1982px 1853px #FFF , 683px 1196px #FFF , 885px 147px #FFF , 140px 572px #FFF , 1414px 202px #FFF , 1287px 375px #FFF , 812px 233px #FFF , 245px 366px #FFF , 619px 1786px #FFF , 158px 727px #FFF , 1051px 1759px #FFF , 1232px 1572px #FFF , 304px 515px #FFF , 1107px 1063px #FFF , 1409px 293px #FFF , 844px 1928px #FFF , 1297px 766px #FFF , 769px 53px #FFF , 1796px 1499px #FFF , 1096px 1588px #FFF , 6px 1066px #FFF , 954px 1823px #FFF , 449px 1318px #FFF , 742px 324px #FFF , 1360px 430px #FFF , 474px 517px #FFF , 1638px 553px #FFF , 65px 362px #FFF , 1668px 305px #FFF , 618px 1791px #FFF , 1248px 698px #FFF , 526px 1505px #FFF , 443px 1738px #FFF , 968px 744px #FFF , 1509px 1343px #FFF , 940px 891px #FFF , 1426px 313px #FFF , 86px 1904px #FFF , 1852px 914px #FFF , 1774px 1138px #FFF , 1406px 378px #FFF , 82px 384px #FFF , 1195px 1561px #FFF , 472px 1994px #FFF , 887px 708px #FFF , 1078px 680px #FFF , 1715px 140px #FFF , 333px 1224px #FFF , 1538px 412px #FFF , 1476px 644px #FFF , 976px 149px #FFF , 938px 1127px #FFF , 531px 1088px #FFF , 996px 403px #FFF , 279px 1233px #FFF , 1761px 1297px #FFF , 1126px 1184px #FFF , 1417px 375px #FFF , 1085px 1137px #FFF , 669px 987px #FFF , 1149px 1963px #FFF , 1097px 880px #FFF , 1591px 85px #FFF , 1858px 884px #FFF , 1187px 1483px #FFF , 1246px 415px #FFF , 126px 516px #FFF , 1824px 672px #FFF , 178px 250px #FFF , 1675px 146px #FFF , 1827px 816px #FFF , 803px 992px #FFF , 1703px 1664px #FFF , 1658px 970px #FFF , 1607px 1896px #FFF , 268px 499px #FFF , 465px 395px #FFF , 287px 468px #FFF , 980px 1675px #FFF , 1959px 1989px #FFF , 429px 1263px #FFF , 1419px 1703px #FFF , 302px 335px #FFF , 1470px 698px #FFF , 431px 1784px #FFF , 1397px 1168px #FFF , 585px 143px #FFF , 1163px 455px #FFF , 1007px 1355px #FFF , 764px 1147px #FFF , 1528px 1835px #FFF , 1298px 1629px #FFF , 438px 971px #FFF , 1940px 1307px #FFF , 1767px 1080px #FFF , 1700px 1582px #FFF , 911px 709px #FFF , 1733px 1916px #FFF , 1650px 1153px #FFF , 1491px 1908px #FFF , 1221px 1065px #FFF , 389px 749px #FFF , 576px 602px #FFF , 84px 1595px #FFF , 1887px 1748px #FFF , 1293px 1674px #FFF , 1372px 986px #FFF , 834px 1280px #FFF , 241px 777px #FFF , 1122px 1540px #FFF , 908px 1032px #FFF , 1715px 14px #FFF , 732px 1014px #FFF , 1888px 766px #FFF , 1433px 1174px #FFF , 1273px 1889px #FFF , 337px 301px #FFF , 1449px 1878px #FFF , 946px 1411px #FFF , 965px 181px #FFF , 1508px 537px #FFF , 977px 1648px #FFF , 696px 1932px #FFF , 601px 305px #FFF , 1734px 186px #FFF , 1962px 1776px #FFF , 965px 791px #FFF , 1563px 422px #FFF , 1427px 822px #FFF , 1540px 599px #FFF , 1246px 1681px #FFF , 1271px 1136px #FFF , 1411px 641px #FFF , 1108px 1981px #FFF , 961px 1884px #FFF , 788px 631px #FFF , 172px 783px #FFF , 1729px 455px #FFF , 1682px 1051px #FFF , 911px 1455px #FFF , 1652px 489px #FFF , 880px 94px #FFF , 59px 747px #FFF , 417px 223px #FFF , 332px 1397px #FFF , 699px 659px #FFF , 693px 728px #FFF , 1232px 208px #FFF , 1514px 774px #FFF , 1070px 633px #FFF , 1768px 165px #FFF , 1261px 1666px #FFF , 35px 1979px #FFF , 54px 1408px #FFF , 820px 745px #FFF , 1732px 147px #FFF , 1282px 1121px #FFF , 1640px 1px #FFF , 1932px 632px #FFF , 895px 31px #FFF , 1751px 266px #FFF , 746px 54px #FFF , 1197px 986px #FFF , 1032px 658px #FFF , 234px 1526px #FFF , 1267px 1176px #FFF , 1280px 357px #FFF , 1333px 381px #FFF , 1739px 1375px #FFF , 888px 1325px #FFF , 704px 550px #FFF , 20px 359px #FFF , 987px 1218px #FFF , 794px 1724px #FFF , 774px 590px #FFF , 1024px 227px #FFF , 1487px 400px #FFF , 1446px 627px #FFF , 984px 1342px #FFF , 966px 703px #FFF , 105px 1673px #FFF , 1225px 1267px #FFF , 119px 1202px #FFF , 1458px 273px #FFF , 1057px 1167px #FFF , 116px 735px #FFF , 665px 1021px #FFF , 476px 1830px #FFF , 145px 906px #FFF , 502px 596px #FFF , 1629px 645px #FFF , 728px 1972px #FFF , 342px 605px #FFF , 1331px 179px #FFF , 707px 1684px #FFF , 388px 1757px #FFF , 805px 73px #FFF , 659px 180px #FFF , 848px 915px #FFF , 182px 1550px #FFF , 1955px 155px #FFF , 973px 1546px #FFF , 1061px 1579px #FFF , 52px 687px #FFF , 1104px 1352px #FFF , 408px 1386px #FFF , 1888px 1692px #FFF , 956px 1018px #FFF , 1355px 1568px #FFF , 1505px 1550px #FFF , 1182px 705px #FFF , 959px 1050px #FFF , 498px 1432px #FFF , 301px 647px #FFF , 443px 334px #FFF , 1402px 461px #FFF , 147px 1270px #FFF , 391px 1572px #FFF , 1017px 341px #FFF , 68px 1770px #FFF , 235px 860px #FFF , 505px 816px #FFF , 1312px 986px #FFF , 1079px 1293px #FFF , 324px 611px #FFF , 1179px 1011px #FFF , 277px 434px #FFF , 1767px 252px #FFF , 1775px 1487px #FFF , 1705px 19px #FFF , 326px 721px #FFF , 378px 70px #FFF , 895px 1736px #FFF , 1570px 365px #FFF , 513px 615px #FFF , 1092px 147px #FFF , 1318px 1932px #FFF , 1592px 1734px #FFF , 699px 918px #FFF , 111px 388px #FFF , 1067px 890px #FFF , 1169px 332px #FFF , 358px 481px #FFF , 1630px 750px #FFF , 179px 1787px #FFF , 355px 489px #FFF , 852px 821px #FFF , 868px 364px #FFF , 386px 1700px #FFF , 799px 1420px #FFF , 1472px 644px #FFF , 1552px 905px #FFF , 48px 1998px #FFF , 1850px 51px #FFF , 416px 678px #FFF , 759px 1046px #FFF , 1451px 1951px #FFF , 101px 1610px #FFF , 1469px 912px #FFF , 1214px 1292px #FFF , 1368px 1018px #FFF , 484px 470px #FFF , 816px 322px #FFF , 1821px 1326px #FFF , 327px 1936px #FFF , 752px 550px #FFF , 1215px 1924px #FFF , 180px 122px #FFF , 784px 1924px #FFF , 1597px 336px #FFF , 248px 1429px #FFF , 4px 181px #FFF , 1801px 1613px #FFF , 1581px 1719px #FFF , 640px 1391px #FFF , 960px 302px #FFF , 1483px 1207px #FFF , 520px 1119px #FFF , 25px 1754px #FFF , 545px 317px #FFF , 1573px 751px #FFF , 1415px 2px #FFF , 101px 761px #FFF , 679px 291px #FFF , 1785px 676px #FFF , 1256px 136px #FFF , 855px 197px #FFF , 1399px 1973px #FFF , 1243px 429px #FFF , 1281px 571px #FFF , 839px 531px #FFF , 789px 1980px #FFF , 877px 783px #FFF , 1526px 1850px #FFF , 644px 1283px #FFF , 1982px 1953px #FFF , 1109px 1232px #FFF , 1532px 643px #FFF , 823px 1287px #FFF , 667px 34px #FFF , 24px 1469px #FFF , 1029px 1130px #FFF , 1645px 254px #FFF , 1054px 1000px #FFF , 1341px 254px #FFF , 184px 188px #FFF , 1160px 1521px #FFF , 348px 1083px #FFF , 1436px 1796px #FFF , 441px 361px #FFF , 1239px 575px #FFF , 1055px 140px #FFF , 1552px 502px #FFF , 607px 864px #FFF , 967px 1883px #FFF , 1407px 1955px #FFF , 405px 1148px #FFF , 604px 992px #FFF , 1116px 506px #FFF , 13px 832px #FFF , 295px 189px #FFF , 964px 1175px #FFF , 1988px 52px #FFF , 935px 209px #FFF , 17px 142px #FFF , 770px 333px #FFF , 682px 633px #FFF , 510px 466px #FFF , 366px 79px #FFF , 199px 954px #FFF , 882px 277px #FFF , 744px 655px #FFF , 37px 1659px #FFF , 1217px 1885px #FFF , 1107px 597px #FFF , 1060px 1335px #FFF , 773px 601px #FFF , 1939px 1632px #FFF , 1607px 1774px #FFF , 1531px 1550px #FFF , 1042px 60px #FFF , 850px 1502px #FFF , 1670px 492px #FFF , 1357px 1654px #FFF , 1279px 1521px #FFF , 633px 1956px #FFF , 1122px 1981px #FFF , 661px 657px #FFF , 521px 1132px #FFF , 1593px 813px #FFF , 1204px 1463px #FFF , 1112px 1495px #FFF , 1755px 367px #FFF , 1685px 1805px #FFF , 1982px 196px #FFF , 484px 51px #FFF , 1041px 330px #FFF , 1487px 563px #FFF , 311px 1872px #FFF , 330px 976px #FFF , 6px 1754px #FFF , 1447px 1182px #FFF , 1926px 148px #FFF , 1640px 490px #FFF , 1548px 1357px #FFF , 1052px 1340px #FFF , 1083px 56px #FFF , 1890px 339px #FFF , 277px 1609px #FFF , 892px 1792px #FFF , 1322px 86px #FFF , 1509px 1515px #FFF , 1650px 1722px #FFF , 334px 497px #FFF , 888px 143px #FFF , 1325px 259px #FFF , 1330px 1505px #FFF , 1374px 645px #FFF , 1184px 937px #FFF , 911px 1044px #FFF , 32px 1257px #FFF , 297px 1884px #FFF , 1031px 963px #FFF , 411px 916px #FFF , 243px 1305px #FFF , 898px 200px #FFF , 1550px 156px #FFF , 159px 716px #FFF , 240px 1130px #FFF , 1046px 1905px #FFF , 1405px 1277px #FFF , 275px 124px #FFF , 964px 795px #FFF , 1270px 1387px #FFF , 1391px 1880px #FFF , 484px 1027px #FFF , 1681px 1706px #FFF , 1665px 697px #FFF , 1073px 1078px #FFF , 1808px 1313px #FFF , 1669px 1266px #FFF , 1965px 747px #FFF , 1734px 972px #FFF , 1549px 1434px #FFF , 945px 146px #FFF , 1211px 1383px #FFF , 1921px 1637px #FFF , 271px 1725px #FFF , 739px 1725px #FFF , 1634px 1827px #FFF , 961px 1131px #FFF , 513px 839px #FFF , 1553px 1725px #FFF , 82px 1667px #FFF , 3px 1797px #FFF , 517px 1511px #FFF , 1644px 929px #FFF , 120px 1638px #FFF , 579px 1168px #FFF , 147px 680px #FFF , 61px 1146px #FFF , 884px 598px #FFF , 630px 1324px #FFF , 1709px 1340px #FFF , 1332px 1142px #FFF , 1990px 1397px #FFF , 854px 1527px #FFF , 1293px 634px #FFF , 1063px 506px #FFF , 1361px 668px #FFF , 926px 347px #FFF , 145px 1031px #FFF , 1289px 1519px #FFF , 1977px 1560px #FFF , 70px 1353px #FFF , 653px 1634px #FFF , 1182px 340px #FFF , 1264px 1127px #FFF , 1246px 40px #FFF , 428px 691px #FFF , 1531px 1817px #FFF , 431px 1906px #FFF , 1406px 1665px #FFF , 597px 1588px #FFF , 1273px 355px #FFF , 995px 1018px #FFF , 1319px 528px #FFF , 1454px 715px #FFF , 1587px 1052px #FFF , 921px 193px #FFF , 1012px 479px #FFF , 689px 1019px #FFF , 1307px 420px #FFF , 1153px 108px #FFF , 1343px 775px #FFF , 1236px 1061px #FFF , 1117px 1099px #FFF , 308px 533px #FFF , 1262px 509px #FFF , 830px 24px #FFF , 426px 695px #FFF , 1148px 1397px #FFF , 1016px 1719px #FFF , 1142px 1280px #FFF , 1841px 310px #FFF , 1890px 1708px #FFF , 1399px 589px #FFF , 913px 1291px #FFF , 955px 1445px #FFF , 431px 491px #FFF , 580px 1002px #FFF , 796px 186px #FFF , 445px 1634px #FFF , 1543px 1377px #FFF , 1853px 57px #FFF , 34px 620px #FFF , 1056px 923px #FFF , 1027px 134px #FFF , 1248px 1252px #FFF , 756px 1855px #FFF , 143px 654px #FFF , 253px 347px #FFF , 181px 943px #FFF , 1044px 1774px #FFF , 367px 1925px #FFF , 1125px 854px #FFF , 1276px 141px #FFF , 422px 413px #FFF , 1261px 973px #FFF , 1030px 1349px #FFF , 1349px 1850px #FFF , 552px 1286px #FFF , 606px 888px #FFF , 464px 1922px #FFF , 1799px 260px #FFF , 1984px 788px #FFF , 1210px 450px #FFF , 121188px 1530px #FFF , 911px 1896px #FFF , 689px 4px #FFF , 806px 162px #FFF , 1201px 604px #FFF , 908px 531px #FFF , 137px 1123px #FFF , 1165px 496px #FFF , 1567px 1797px #FFF , 614px 504px #FFF , 1551px 1165px #FFF , 1309px 1032px #FFF , 1321px 26px #FFF , 1372px 326px #FFF , 1762px 1159px #FFF , 728px 5px #FFF , 1364px 459px #FFF , 1333px 918px #FFF , 1082px 1732px #FFF , 286px 319px #FFF , 1636px 1220px #FFF , 350px 966px #FFF , 124px 219px #FFF , 184px 1654px #FFF , 1195px 160px #FFF , 1690px 737px #FFF , 1386px 472px #FFF , 1522px 1911px #FFF , 1082px 1129px #FFF , 491px 67px #FFF , 826px 393px #FFF , 643px 632px #FFF , 1934px 1461px #FFF , 1325px 316px #FFF , 934px 1722px #FFF , 1044px 879px #FFF , 1109px 1482px #FFF , 1040px 642px #FFF , 801px 509px #FFF , 1352px 1583px #FFF , 160px 339px #FFF , 1111px 1731px #FFF , 1650px 1190px #FFF , 1804px 1019px #FFF , 745px 604px #FFF , 1391px 1108px #FFF , 344px 708px #FFF , 395px 111px #FFF , 913px 1180px #FFF , 537px 1036px #FFF , 1048px 1611px #FFF , 1926px 155px #FFF , 392px 193px #FFF , 1980px 1465px #FFF , 1853px 1349px #FFF , 204px 1317px #FFF , 1342px 1956px #FFF , 785px 1564px #FFF , 1478px 612px #FFF , 1459px 491px #FFF , 1767px 265px #FFF , 1032px 495px #FFF , 946px 1196px #FFF , 607px 285px #FFF , 887px 1940px #FFF , 1618px 962px #FFF , 85px 801px #FFF , 1828px 525px #FFF , 523px 1927px #FFF , 280px 1676px #FFF , 551px 1133px #FFF , 1888px 936px #FFF , 875px 863px #FFF , 395px 1954px #FFF , 155px 590px #FFF , 1924px 262px #FFF , 1039px 1430px #FFF , 1356px 1816px #FFF , 978px 671px #FFF , 1968px 1044px #FFF , 1693px 15px #FFF , 266px 1506px #FFF , 1061px 224px #FFF , 690px 1132px #FFF , 1149px 313px #FFF , 744px 898px #FFF , 848px 1851px #FFF , 296px 761px #FFF , 55px 624px #FFF , 573px 131px #FFF , 483px 1869px #FFF , 157px 1304px #FFF , 496px 489px #FFF , 729px 1730px #FFF , 163px 1023px #FFF , 1065px 1426px #FFF , 1058px 865px #FFF , 1204px 1762px #FFF , 73px 527px #FFF , 668px 1237px #FFF , 1px 259px #FFF , 1027px 107px #FFF , 1347px 842px #FFF , 720px 819px #FFF , 97px 1047px #FFF , 474px 1262px #FFF , 1406px 1163px #FFF , 1620px 1312px #FFF , 292px 423px #FFF , 1579px 1735px #FFF , 687px 305px #FFF , 1810px 1822px #FFF , 1499px 241px #FFF , 1578px 1308px #FFF , 770px 1441px #FFF , 398px 646px #FFF , 1186px 1423px #FFF , 6px 201px #FFF , 1684px 1057px #FFF , 1252px 1352px #FFF , 1649px 317px #FFF , 746px 1777px #FFF , 537px 97px #FFF , 347px 1613px #FFF , 1709px 1896px #FFF , 134px 957px #FFF , 755px 340px #FFF , 107px 1057px #FFF , 263px 1459px #FFF , 1559px 1124px #FFF , 1082px 19px #FFF , 557px 795px #FFF , 596px 455px #FFF , 1877px 1535px #FFF , 457px 320px #FFF , 532px 270px #FFF , 773px 1991px #FFF , 644px 1840px #FFF , 777px 1413px #FFF , 726px 203px #FFF , 20px 740px #FFF , 655px 909px #FFF , 396px 1998px #FFF , 235px 954px #FFF , 1737px 264px #FFF , 670px 1532px #FFF , 498px 159px #FFF , 540px 1997px #FFF , 1792px 1327px #FFF , 880px 1023px #FFF , 1917px 1938px #FFF , 1859px 148px #FFF , 1147px 1781px #FFF , 428px 1876px #FFF , 1952px 605px #FFF , 655px 80px #FFF , 1500px 1545px #FFF , 1656px 644px #FFF , 615px 247px #FFF , 795px 1881px #FFF , 1750px 586px #FFF , 148px 1490px #FFF , 1434px 74px #FFF , 417px 1969px #FFF , 962px 1526px #FFF , 835px 962px #FFF , 330px 1767px #FFF , 1557px 435px #FFF , 240px 341px #FFF , 1857px 1589px #FFF , 765px 281px #FFF , 1452px 405px #FFF , 1480px 1724px #FFF , 950px 1094px #FFF , 710px 1388px #FFF , 1333px 1919px #FFF , 706px 1589px #FFF , 1476px 1465px #FFF , 744px 291px #FFF , 123px 870px #FFF , 1406px 428px #FFF , 727px 1609px #FFF , 1149px 1838px #FFF , 78px 169px #FFF , 1088px 284px #FFF , 670px 399px #FFF , 711px 1923px #FFF , 42px 1720px #FFF , 667px 570px #FFF , 1274px 693px #FFF , 1056px 644px #FFF , 1937px 793px #FFF , 1200px 602px #FFF , 1493px 755px #FFF , 545px 870px #FFF , 887px 270px #FFF , 1290px 164px #FFF , 265px 1185px #FFF;
    animation: twinkle_one 5s linear infinite;

@-webkit-keyframes twinkle_one {
  0%   { opacity: 1; }
  30%  { opacity: 1; }
  70%  { opacity: 0; }
  100% { opacity: 1; }
}
@-moz-keyframes twinkle_one {
  0%   { opacity: 1; }
  30%  { opacity: 1; }
  70%  { opacity: 0; }
  100% { opacity: 1; }
}
@-o-keyframes twinkle_one {
  0%   { opacity: 1; }
  30%  { opacity: 1; }
  70%  { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes twinkle_one {
  0%   { opacity: 1; }
  30%  { opacity: 1; }
  70%  { opacity: 0; }
  100% { opacity: 1; }
}
`
const StarTwo = styled.div`
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 236px 1043px #FFF , 784px 298px #FFF , 594px 611px #FFF , 1790px 363px #FFF , 1099px 831px #FFF , 1619px 474px #FFF , 903px 652px #FFF , 1472px 978px #FFF , 1620px 1445px #FFF , 1533px 1396px #FFF , 303px 994px #FFF , 318px 1761px #FFF , 1755px 263px #FFF , 783px 482px #FFF , 1224px 216px #FFF , 1625px 1456px #FFF , 813px 1703px #FFF , 1918px 1212px #FFF , 1872px 799px #FFF , 280px 793px #FFF , 1932px 99px #FFF , 1925px 1863px #FFF , 1444px 809px #FFF , 879px 484px #FFF , 1283px 1275px #FFF , 154px 1516px #FFF , 1986px 404px #FFF , 526px 774px #FFF , 540px 664px #FFF , 953px 1818px #FFF , 1931px 1100px #FFF , 1105px 92px #FFF , 1290px 210px #FFF , 1739px 33px #FFF , 466px 1203px #FFF , 1821px 139px #FFF , 1524px 269px #FFF , 777px 1345px #FFF , 116px 29px #FFF , 692px 10px #FFF , 1165px 1444px #FFF , 230px 1666px #FFF , 1293px 811px #FFF , 1349px 414px #FFF , 1598px 785px #FFF , 1058px 1829px #FFF , 1995px 1740px #FFF , 947px 614px #FFF , 141px 1062px #FFF , 1167px 248px #FFF , 1366px 1098px #FFF , 811px 1344px #FFF , 1723px 872px #FFF , 1450px 1137px #FFF , 1225px 1762px #FFF , 1766px 144px #FFF , 1160px 1662px #FFF , 931px 589px #FFF , 937px 579px #FFF , 941px 592px #FFF , 864px 681px #FFF , 41px 995px #FFF , 761px 1239px #FFF , 1890px 1598px #FFF , 1262px 1800px #FFF , 1990px 990px #FFF , 1259px 880px #FFF , 1151px 1318px #FFF , 352px 1485px #FFF , 1345px 876px #FFF , 1446px 945px #FFF , 1259px 1789px #FFF , 1290px 374px #FFF , 1388px 717px #FFF , 32px 1673px #FFF , 1204px 862px #FFF , 1184px 1186px #FFF , 514px 574px #FFF , 1625px 279px #FFF , 1491px 1821px #FFF , 990px 398px #FFF , 1552px 1243px #FFF , 1427px 1528px #FFF , 222px 808px #FFF , 732px 190px #FFF , 12px 1378px #FFF , 964px 444px #FFF , 317px 267px #FFF , 1193px 161px #FFF , 401px 716px #FFF , 1399px 901px #FFF , 547px 318px #FFF , 1365px 1943px #FFF , 1083px 1137px #FFF , 689px 251px #FFF , 833px 1431px #FFF , 236px 177px #FFF , 103px 1987px #FFF , 320px 1421px #FFF , 1938px 1277px #FFF , 1738px 1755px #FFF , 777px 1942px #FFF , 480px 1451px #FFF , 905px 1958px #FFF , 993px 1429px #FFF , 1748px 1796px #FFF , 1596px 79px #FFF , 1355px 140px #FFF , 1914px 261px #FFF , 1027px 1239px #FFF , 242px 534px #FFF , 1557px 192px #FFF , 1884px 88px #FFF , 1602px 296px #FFF , 872px 307px #FFF , 998px 1373px #FFF , 38px 1192px #FFF , 763px 516px #FFF , 1463px 925px #FFF , 1554px 147px #FFF , 1322px 2000px #FFF , 1885px 555px #FFF , 1092px 1729px #FFF , 259px 735px #FFF , 1852px 295px #FFF , 49px 1307px #FFF , 1111px 1808px #FFF , 1939px 643px #FFF , 440px 1370px #FFF , 1386px 657px #FFF , 968px 611px #FFF , 1270px 1739px #FFF , 870px 392px #FFF , 1257px 765px #FFF , 1106px 1530px #FFF , 1232px 1910px #FFF , 1901px 1368px #FFF , 1027px 1105px #FFF , 1787px 368px #FFF , 735px 375px #FFF , 1475px 825px #FFF , 1836px 518px #FFF , 349px 1667px #FFF , 1260px 495px #FFF , 1799px 1574px #FFF , 1018px 682px #FFF , 648px 995px #FFF , 935px 577px #FFF , 156px 1690px #FFF , 602px 1920px #FFF , 1876px 384px #FFF , 1561px 1362px #FFF , 1446px 632px #FFF , 1923px 209px #FFF , 1076px 1611px #FFF , 738px 722px #FFF , 1484px 1655px #FFF , 137px 1339px #FFF , 1721px 541px #FFF , 1544px 1082px #FFF , 1083px 1601px #FFF , 1475px 1526px #FFF , 1653px 1500px #FFF , 451px 1136px #FFF , 288px 372px #FFF , 290px 810px #FFF , 1492px 814px #FFF , 1508px 1379px #FFF , 730px 1116px #FFF , 505px 929px #FFF , 1775px 1887px #FFF , 1942px 1091px #FFF , 927px 1676px #FFF , 406px 992px #FFF , 983px 626px #FFF , 1356px 741px #FFF , 1609px 936px #FFF , 313px 1244px #FFF , 616px 984px #FFF , 713px 1281px #FFF , 1050px 844px #FFF , 1010px 104px #FFF , 1858px 547px #FFF , 429px 1678px #FFF , 916px 763px #FFF , 418px 378px #FFF , 7px 631px #FFF , 1702px 1288px #FFF , 799px 987px #FFF , 1661px 1081px #FFF , 1655px 1846px #FFF , 361px 1676px #FFF , 1979px 1521px #FFF , 415px 418px #FFF , 1641px 1999px #FFF , 955px 882px #FFF , 1290px 324px #FFF , 930px 1826px #FFF , 989px 807px #FFF , 461px 917px #FFF;
  animation: twinkle_two 10s linear infinite;

  @-webkit-keyframes twinkle_two {
  0%   { opacity: 1; }
  25%  { opacity: 0; }
  80%  { opacity: 0; }
  100% { opacity: 1; }
}
@-moz-keyframes twinkle_two {
  0%   { opacity: 1; }
  25%  { opacity: 0; }
  80%  { opacity: 0; }
  100% { opacity: 1; }
}
@-o-keyframes twinkle_two {
  0%   { opacity: 1; }
  25%  { opacity: 0; }
  80%  { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes twinkle_two {
  0%   { opacity: 1; }
  25%  { opacity: 0; }
  80%  { opacity: 0; }
  100% { opacity: 1; }
}

`
const StarThree = styled.div`
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1948px 1304px #FFF , 255px 1453px #FFF , 146px 1809px #FFF , 1216px 205px #FFF , 1418px 1507px #FFF , 206px 1111px #FFF , 734px 1490px #FFF , 1985px 1787px #FFF , 188px 1154px #FFF , 1447px 113px #FFF , 1484px 1176px #FFF , 1495px 1763px #FFF , 1597px 453px #FFF , 1840px 1052px #FFF , 655px 1587px #FFF , 1171px 1430px #FFF , 1106px 410px #FFF , 97px 1054px #FFF , 714px 1158px #FFF , 1877px 1980px #FFF , 181px 105px #FFF , 1387px 1624px #FFF , 485px 1406px #FFF , 1770px 1868px #FFF , 1403px 770px #FFF , 204px 1690px #FFF , 300px 406px #FFF , 103px 364px #FFF , 1376px 774px #FFF , 1885px 753px #FFF , 162px 822px #FFF , 1944px 1848px #FFF , 500px 269px #FFF , 317px 1205px #FFF , 49px 905px #FFF , 1897px 1698px #FFF , 1937px 84px #FFF , 1831px 1273px #FFF , 1244px 1355px #FFF , 731px 737px #FFF , 1536px 802px #FFF , 628px 394px #FFF , 1582px 1266px #FFF , 1583px 668px #FFF , 1548px 1611px #FFF , 303px 945px #FFF , 1749px 980px #FFF , 909px 732px #FFF , 645px 808px #FFF , 56px 1087px #FFF , 1320px 1359px #FFF , 1053px 473px #FFF , 1783px 834px #FFF , 137px 1176px #FFF , 786px 1701px #FFF , 656px 906px #FFF , 620px 793px #FFF , 1471px 423px #FFF , 1046px 108px #FFF , 1849px 1270px #FFF , 1152px 1323px #FFF , 323px 623px #FFF , 304px 1154px #FFF , 678px 1427px #FFF , 734px 955px #FFF , 1717px 674px #FFF , 1974px 1431px #FFF , 859px 1871px #FFF , 822px 1386px #FFF , 1961px 1081px #FFF , 750px 1690px #FFF , 1387px 547px #FFF , 776px 907px #FFF , 435px 1934px #FFF , 542px 321px #FFF , 320px 754px #FFF , 622px 1759px #FFF , 1758px 597px #FFF , 742px 469px #FFF , 638px 1795px #FFF , 1578px 1755px #FFF , 1881px 1923px #FFF , 148px 1001px #FFF , 1333px 1015px #FFF , 663px 453px #FFF , 166px 730px #FFF , 319px 1423px #FFF , 1571px 1401px #FFF , 1538px 1363px #FFF , 851px 15px #FFF , 1884px 590px #FFF , 1016px 778px #FFF , 1993px 1060px #FFF , 40px 444px #FFF , 667px 639px #FFF , 1299px 1074px #FFF , 547px 923px #FFF , 93px 1476px #FFF , 1411px 1712px #FFF , 535px 1825px #FFF;
  animation: twinkle_three 15s linear infinite;
  border-radius: 1px;

  @-webkit-keyframes twinkle_three {
  0%   { opacity: 1; }
  30%  { opacity: 0; }
  40%  { opacity: 0; }
  100% { opacity: 1; }
}
@-moz-keyframes twinkle_three {
  0%   { opacity: 1; }
  30%  { opacity: 0; }
  40%  { opacity: 0; }
  100% { opacity: 1; }
}
@-o-keyframes twinkle_three {
  0%   { opacity: 1; }
  30%  { opacity: 0; }
  40%  { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes twinkle_three {
  0%   { opacity: 1; }
  30%  { opacity: 0; }
  40%  { opacity: 0; }
  100% { opacity: 1; }
}

`

export default class Star extends Component {
    render() {
        return (
            <StarContainer>
                <StarsOne />
                <StarTwo />
                <StarThree />
                {this.props.children}
            </StarContainer>
        )
    }
}
