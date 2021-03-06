import request from "request";
import querystring from "querystring";

const url = process.env.DB_SERVER;

// Save a document
export const save = function (db, doc, done) {
  request.put(
    {
      url: url + "/" + db + "/" + doc._id,
      body: doc,
      json: true,
    },
    function (err, resp, body) {
      if (err) return done("Unable to connect CouchDB");
      if (body.ok) {
        doc._rev = body.rev;
        return done(null, doc);
      }

      done("Unable to save the document");
    }
  );
};

// Get all documents with the built-in 'All' view
export const all = function (db, options, done) {
  var params = querystring.stringify({
    include_docs: options.include_docs === false ? false : true,
    descending: options.descending,
    skip: options.skip,
    limit: options.limit,
    key: options.key,
    startkey: options.startkey,
    endkey: options.endkey,
  });

  request(
    {
      url: url + "/" + db + "/_all_docs?" + params,
      json: true,
    },
    function (err, res, body) {
      if (err) return done("Unable to connect to CouchDB");
      done(null, body);
    }
  );
};
