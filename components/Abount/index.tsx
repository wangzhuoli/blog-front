import styles from './index.module.css';
import React from 'react';
import Card from '../Card';

const About: React.FC<{ className?: string }> = (props) => {
  const { className } = props;
  return (
    <Card className={`${styles.aboutContainer} ${className}`}>
      <div className={styles.info}>
        <img
          src={
            'http://wangzhuoli-blog.oss-cn-shenzhen.aliyuncs.com/avatar/b4d26c7a9224aa70d5abc09e13537759_1663912181667_1664175600343.jpeg'
          }
          className={styles.avatar}
        />
        <div className={styles.name}>XXX</div>
        <div className={styles.motto}>学如逆水行舟，不进则退。</div>
      </div>
      <div className={styles.statsList}>
        <div className={styles.statsItem}>
          <p className={styles.statsTitle}>文章</p>
          <p className={styles.statsNum}>18</p>
        </div>
        <div className={styles.statsItem}>
          <p className={styles.statsTitle}>标签</p>
          <p className={styles.statsNum}>0</p>
        </div>
        <div className={styles.statsItem}>
          <p className={styles.statsTitle}>分类</p>
          <p className={styles.statsNum}>3</p>
        </div>
      </div>
      <a href={''} className={styles.attention}>
        <span
          className={`iconfont icon-favorites-fill ${styles.iconFavorites}`}
        />
        收藏
      </a>
      <div className={styles.other}>
        <div className={`iconfont icon-wechat- ${styles.iconWeixin}`}>
          <span className={styles.qrcodeContainer}>
            <img
              className={styles.qrcodeImg}
              src={
                'http://wangzhuoli-blog.oss-cn-shenzhen.aliyuncs.com/avatar/b4d26c7a9224aa70d5abc09e13537759_1663912181667_1664175600343.jpeg'
              }
            />
          </span>
        </div>
        <a
          href={'https://github.com/wangzhuoli'}
          target={'_blank'}
          className={`iconfont icon-github ${styles.iconGithub}`}
          rel="noreferrer"
        />
        <a
          href={'https://space.bilibili.com/242188552'}
          target={'_blank'}
          className={`iconfont icon-bilibili ${styles.iconBilibili}`}
          rel="noreferrer"
        />
        <a
          href={'https://juejin.cn/user/588993965604462'}
          target={'_blank'}
          className={`iconfont icon-juejin ${styles.iconJuejin}`}
          rel="noreferrer"
        />
      </div>
    </Card>
  );
};

export default About;
