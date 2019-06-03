import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './EditPostItem.css';

export class EditPostItem extends Component {
  editPost = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    const visitsRef = this.refs.visits;
    if (nameRef.value && titleRef.value && contentRef.value && visitsRef.value) {
      this.props.editPost(nameRef.value, titleRef.value, contentRef.value, visitsRef.value);
      nameRef.value = titleRef.value = contentRef.value = visitsRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showEditPost ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="editPost" /></h2>
          <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="name" />
          <input placeholder={this.props.intl.messages.postTitle} className={styles['form-field']} ref="title" />
          <textarea placeholder={this.props.intl.messages.postContent} className={styles['form-field']} ref="content" />
          <input placeholder={this.props.intl.messages.visitsNumber} className={styles['form-field']} ref="visits" />
          <a className={styles['post-submit-button']} href="#" onClick={this.addPost}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

EditPostItem.propTypes = {
  editPost: PropTypes.func.isRequired,
  showEditPost: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(EditPostItem);
