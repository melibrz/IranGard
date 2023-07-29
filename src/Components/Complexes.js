import React, { Component } from 'react';
import '../Styles/Collections.css';
import '../Styles/topic.css';
import { Link } from 'react-router-dom';

class Collection extends Component {
  render() {
    const { collectionsData, show } = this.props;
    return (
      <>
        <div className="collection-wrapper">
          {show && <p className='topic'>خاص ترین شهرهای ایران برای سفر:</p>}
        </div>
        <div className="cards-wrapper">
          {collectionsData &&
            collectionsData.map(({ url, id, description ,route}) => (
              <CollectionCard key={id} url={url} description={description} route={route} />
            ))}
        </div>
      </>
    );
  }
}

class CollectionCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    return (
      <div className="collection-card-wrapper">
        <div className="card-parent">
          <Link
            to={{ pathname: `/${this.props.route}` }}
            className="link"
          >
            <div
              className="card-child"
              style={{
                backgroundImage: url
              }}
            >
              <p>{this.props.description}</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Collection;
