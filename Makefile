COMMIT		= $(shell git rev-parse --short HEAD)

# docker:
# 	docker build \
#     -t mfm-payload:$(COMMIT) \
#     -t 606780901333.dkr.ecr.eu-central-1.amazonaws.com/mfm-payload:$(COMMIT) \
#     --build-arg GIT_COMMIT=$(COMMIT) \
#     .

# docker:
# 	docker buildx build --platform linux/amd64 \
#     -t mfm-payload:$(COMMIT) \
#     -t registry.musingsfrommunich.art/mfm-payload:$(COMMIT) \
#     --build-arg GIT_COMMIT=$(COMMIT) \
#     .

docker:
	docker build \
    -t mfm-payload:$(COMMIT) \
    -t registry.musingsfrommunich.art/mfm-payload:$(COMMIT) \
  --build-arg GIT_COMMIT=$(COMMIT) \
    .

push:
	docker push registry.musingsfrommunich.art/mfm-payload:$(COMMIT)
