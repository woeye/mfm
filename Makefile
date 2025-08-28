COMMIT		= $(shell git rev-parse HEAD)

docker:
	docker build \
    -t mfm-payload:$(COMMIT) \
    --build-arg GIT_COMMIT=$(COMMIT) \
    .
