import React from 'react';
import logo from "./static/logo.png"
import dzt from "./static/dzt.png"
import dyr from "./static/dyr.png"
import ly from "./static/ly.png"
import lyj from "./static/lyj.png"
import wb from "./static/wb.png"
import wbb from "./static/wbb.png"
import xs from "./static/xs.jpg"
import yyl from "./static/yyl.png"
import pic1 from "./static/pic1.png"
import pic2 from "./static/pic2.png"

export const Nav31DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children: logo
      // 'https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '/',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>主页</p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>指目商城</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>指目论坛</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item~kpgd63h9wsu',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <p>联系我们</p>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>指目为梦</p>
            </span>
          </span>
        ),
        className: 'banner5-title',
      },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: (
          <span>
            <p>打造助盲新生态</p>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <span>
            <p>致力于打造以互联网模式为基础的“扶盲助盲”生态圈</p>
            <p>推动爱盲平台成为国内第一家全方位助盲平台</p>
          </span>
        ),
      },
      // {
      //   name: 'button',
      //   className: 'banner5-button-wrapper',
      //   children: {
      //     href: '#',
      //     className: 'banner5-button',
      //     type: 'primary',
      //     children: '开始使用',
      //   },
      // },
    ],
  },
  image: {
    className: 'banner5-image',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ',
  },
};
export const Feature01DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>
              <span>服务</span>
              <br />
            </p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>指目商城</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <p>为指目旗下各类产品提供售卖渠道</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>指目云</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>科学完备的视障群体大数据分析系统</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>指目论坛</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>视障群体信息交流及分析平台</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>产品</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'jzjn8afnsxb-editor_css content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item jzjgrrupf2c-editor_css',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon jzjgrlz134-editor_css',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'content0-block-title jzj8xt5kgv7-editor_css',
              children: (
                <span>
                  <p>盲人阅读指套</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>实时翻译盲文并以语音的形式进行播报</p>
                </span>
              ),
              className: 'jzj8z9sya9-editor_css',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon jzjncn210ql-editor_css',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'content0-block-title jzjne54fwqm-editor_css',
              children: (
                <span>
                  <p>盲人智能手杖</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <p>将摄像头中的物体影像展示在手掌中 让盲人感受理解世界</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon jzjndq0dueg-editor_css',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'content0-block-title jzjne24af8c-editor_css',
              children: (
                <span>
                  <p>残疾人助推器</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>开发中</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block~jzjn87bmyc7',
        className: 'content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon jzjndsyw8sf-editor_css',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'content0-block-title jzjndw5oerk-editor_css',
              children: (
                <span>
                  <p>助听器芯片</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>开发中</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: pic1, //'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>盲人阅读指套</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          该设备仅有手指大小,&nbsp;使用时可套在食指上,&nbsp;当以指划的方式阅读盲文时,&nbsp;设备可以实时翻译盲文并以语音的形式进行播报。
        </p>
      </span>
    ),
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: pic2, //'https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>盲人智能手杖</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          智能拐杖,&nbsp;使用时可以满足日常的路线规划，定位，导航的基本功能。通过传感器和摄像头准确定位障碍物大小和距离。同时握把处可以滚动突起，将摄像头中的物体影像去展示在手掌中，让盲人感受理解世界。
        </p>
      </span>
    ),
  },
};
export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>指目生态</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>致力于打造以互联网模式为基础的“扶盲助盲”生态圈</p>
            <p>推动爱盲平台成为国内第一家全方位助盲平台</p>
          </span>
        ),
      },
    ],
  },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <span>
                <p>指目云</p>
              </span>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <p>
                      “指目云”是视障群体信息收集分析大数据平台，由前端系统和后台数据库<span>
                        两部分构成，旨在完善我国视障群体的信息收集、分析，以便更好的为视障群
                      </span>
                      <span>
                        体服务。
                      </span>
                    </p>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>指目论坛</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>
                “指目论坛”是视障群体信息交流及分析平台，由前端系统和后台数据库两部分构成，旨在提升我国视障群体的信息流通能力，以便更好的为视障群体服务。指目论坛存在的主要意义是帮助盲人们解决具体生活问题。
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>周边文创</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>
                团队在项目发展后期将会打造“指目”公益品牌，并将品牌投放在大众视<span>
                  野。
                </span>
              </p>
            </span>
          ),
        },
      },
    ],
  },
};
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>特邀顾问</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: 'https://zhimu.nekomio.com/static/ly.png'
                // 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <p>李勇</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <p>保定残联党组书记、理事长、残工委办公室主任</p>
                  <p>
                    <br />
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: 'https://zhimu.nekomio.com/static/yyl.png',
                // 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <p>于艳玲</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <p>保定市涞水县特教中心校长</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: 'https://zhimu.nekomio.com/static/lyj.png'
                // 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <p>李永军</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <p>曾任新疆自治区残联副主席</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Teams40DataSource = {
  wrapper: {
    className: 'home-page-wrapper content8-wrapper kp730fnpa47-editor_css',
  },
  page: { className: 'home-page content8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>团队指导</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'content-wrapper',
    children: [
      {
        name: 'block0',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children: dzt,
              // 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <p>戴志涛</p>
              </span>
            ),
          },
          content: {
            className: 'content8-content kp72rzqzoh-editor_css',
            children: (
              <span>
                <span>
                  <p>“智能通信软件与多媒体北京市</p>
                  <p>重点实验室”主任，教授。</p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children: wb,
              // 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <p>吴斌</p>
              </span>
            ),
          },
          content: {
            className: 'content8-content',
            children: (
              <span>
                <p>在复杂网络、数据挖掘、海量</p>
                <p>数据并行处理、可视分析、等</p>
                <p>方面发表近百篇论文。</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children: wbb,
              // 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <p>王柏 </p>
              </span>
            ),
          },
          content: {
            className: 'content8-content',
            children: (
              <span>
                <span>
                  <p>北京邮电大学博士生导师, 多年</p>
                  <p>来一直在计算机科学及通信系</p>
                  <p>
                    统软件方面从事教学和研究工<span>作。</span>
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children: dyr,
              // 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <p> 丁玉荣 </p>
              </span>
            ),
          },
          content: {
            className: 'content8-content',
            children: (
              <span>
                <p>指导教师</p>
                <p>在《基于模式识别的盲文阅读</p>
                <p>指套》的创新项目过程中给予</p>
                <p>技术指导。</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block~kp72rb1co2',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children: xs,
              // 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <p>徐萨</p>
              </span>
            ),
          },
          content: {
            className: 'content8-content',
            children: (
              <span>
                <p>蓝图创始人，2019全国双创周</p>
                <p>北京市唯一旗手代表“第十四届</p>
                <p>中国大学生年度人物”</p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>
          <span>
            ©2021 <a href="zhimu.site">Zhimu</a> All Rights Reserved<br />
          </span>
        </span>
      </span>
    ),
  },
};
