import ContextCreator from './ContextCreator';

const {upload: uploadService, download: downloadService} = {
  download: (id) => {
    return new Promise((resolver) => {
      setTimeout(() => {resolver(`DOWNLOADED ${id}`);}, 1000);
    });
  },
  upload: (id) => {
    return new Promise((resolver) => {
      setTimeout(() => {resolver(`UPLOADED ${id}`);}, 1000);
    });
  },
}

const reducer = (state, action) => {
  const {type, value} = action;
  let newState;
  const keys = {downloadedFile: undefined, uploadedFile: undefined};
  let excludeKey;
  if (type === 'DOWNLOADED') {
    newState = Object.assign({}, {...state}, {downloadedFile: value});
    excludeKey = 'downloadedFile';
  } else if (type === 'UPLOADED') {
    const {file, text} = value;
    const files = [...state.files, file];
    newState = Object.assign({}, {...state}, {files}, {uploadedFile: text});
    excludeKey = 'uploadedFile';
  }

  if(newState && excludeKey) {
    Object.keys(keys).filter(k => k!== excludeKey).forEach((k) => {
      delete newState[k];
    });
    return newState;
  }


  return state;
};

const actions = {
  download: (dispatch) => (({value}) => {
    downloadService(value).then((r) => {
      dispatch({type: 'DOWNLOADED', value: r});
    });

  }),
  upload: (dispatch) => (({value}) => {
    uploadService(value).then((r) => {
      dispatch({type: 'UPLOADED', value: {file: value, text: r}});
    });

  }),
};

const {Provider, Context} = ContextCreator({actions, reducer});

export {Provider, Context};
