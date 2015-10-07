module.exports = exports = function(store){
	return {
		find: function(req, res) {
			store.find(req.params, function(err, doc){
				if (err) return res.status(500).json(err);
				res.json(doc);
			})
		},
		findOne: function(req, res) {
			store.findOne({_id: req.params.id}, function(err, doc){
				if (err) return res.status(500).json(err);
				if (!doc) return res.status(404).json({id: req.params.id});
				res.json(doc);
			})
		},
		insert: function(req, res) {
			store.insert(req.body, function(err, doc){
				if (err) return res.status(500).json(err);
				res.json(doc);
			})
		},
		update: function(req, res) {
			store.update({_id: req.params.id}, req.body, function(err, num, doc){
				if (err) return res.status(500).json(err);
				if (num === 0) return res.status(404).json({id: req.params.id});
				res.json(doc);
			})
		},
		delete: function(req, res) {
			store.remove({_id: req.params.id}, {}, function(err, num, doc){
				if (err) return res.status(500).json(err);
				if (num === 0) return res.status(404).json({id: req.params.id});
				res.json(doc);
			})
		}
	};
};
