import React, { useState } from 'react';
import css from './Faq.module.css';
import ape1s1 from 'img/faq/faq1@1x.jpg';
import ape1s2 from 'img/faq/faq1@2x.jpg';
import ape2s1 from 'img/faq/faq2@1x.jpg';
import ape2s2 from 'img/faq/faq2@2x.jpg';
import ape3s1 from 'img/faq/faq3@1x.jpg';
import ape3s2 from 'img/faq/faq3@2x.jpg';
import ape4s1 from 'img/faq/faq4@1x.jpg';
import ape4s2 from 'img/faq/faq4@2x.jpg';

export const Faq = () => {
  const [openedIndex, setOpenedIndex] = useState(1);

  const handleItemClick = index => {
    setOpenedIndex(index === openedIndex ? null : index);
  };

  return (
    <section className={css.faqSection}>
      <h2 className={css.faqTitle}>FAQ</h2>
      <ul className={css.faqList}>
        <li
          className={`${css.faqItem} ${openedIndex === 0 ? css.open : ''}`}
          key={0}
        >
          <span className={css.itemNumber}>[ 1 ]</span>
          <h3 className={css.itemTitle} onClick={() => handleItemClick(0)}>
            WHAT IS AN NFT COLLECTION?
          </h3>
          <div className={css.itemImage}>
            <picture>
              <source
                srcSet={`${ape1s1} 1x, ${ape1s2} 2x`}
                media="(min-width: 768px)"
              />
              <img src={ape1s1} alt="stylish monkey on a pink background" />
            </picture>
          </div>
          <p className={css.itemText}>
            An NFT collection is a group of unique digital assets, each
            represented by a non-fungible token, typically created around a
            specific theme or style.
          </p>
        </li>
        <li
          className={`${css.faqItem} ${openedIndex === 1 ? css.open : ''}`}
          key={1}
        >
          <span className={css.itemNumber}>[ 2 ]</span>
          <h3 className={css.itemTitle} onClick={() => handleItemClick(1)}>
            HOW DO I PURCHASE NFTS FROM A COLLECTION?
          </h3>
          <div className={css.itemImage}>
            <picture>
              <source
                srcSet={`${ape2s1} 1x, ${ape2s2} 2x`}
                media="(min-width: 768px)"
              />
              <img src={ape2s1} alt="monkey in military style" />
            </picture>
          </div>
          <p className={css.itemText}>
            To purchase nfts from a collection, you typically need to use
            cryptocurrency on a blockchain0based marketplace.
          </p>
        </li>
        <li
          className={`${css.faqItem} ${openedIndex === 2 ? css.open : ''}`}
          key={2}
        >
          <span className={css.itemNumber}>[ 3 ]</span>
          <h3 className={css.itemTitle} onClick={() => handleItemClick(2)}>
            CAN I SELL OR TRADE NFTS FROM A COLLECTION?
          </h3>
          <div className={css.itemImage}>
            <picture>
              <source
                srcSet={`${ape3s1} 1x, ${ape3s2} 2x`}
                media="(min-width: 768px)"
              />
              <img src={ape3s1} alt="monkey on a red background" />
            </picture>
          </div>
          <p className={css.itemText}>
            Yes, you can sell or trade NFTs from a collection like you would
            other digital assets.
          </p>
        </li>
        <li
          className={`${css.faqItem} ${openedIndex === 3 ? css.open : ''}`}
          key={3}
        >
          <span className={css.itemNumber}>[ 4 ]</span>
          <h3 className={css.itemTitle} onClick={() => handleItemClick(3)}>
            WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?
          </h3>
          <div className={css.itemImage}>
            <picture>
              <source
                srcSet={`${ape4s1} 1x, ${ape4s2} 2x`}
                media="(min-width: 768px)"
              />
              <img src={ape4s1} alt="sad monkey on a gray background" />
            </picture>
          </div>
          <p className={css.itemText}>
            As an NFT owner, you can own, transfer, potentially access exclusive
            content, resell, but don't automatically get copyright or
            intellectual property rights.
          </p>
        </li>
      </ul>
    </section>
  );
};
