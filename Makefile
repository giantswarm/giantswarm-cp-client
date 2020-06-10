SPEC_BRANCH := master
API_SPEC_URL := https://raw.githubusercontent.com/giantswarm/cp-api-spec/$(SPEC_BRANCH)/pkg/spec/swagger.yaml

BUILD_COLOR = ""
GEN_COLOR = ""
NO_COLOR = ""

ifneq (, $(shell command -v tput))
ifeq ($(shell test `tput colors` -ge 8 && echo "yes"), yes)
BUILD_COLOR = \033[0;34m
GEN_COLOR = \033[0;32m
NO_COLOR = \033[0m
endif
endif

all: generate

.PHONY: generate
generate:
	@$(MAKE) ts-client

# Generate TypeScript client.
.PHONY: ts-client
ts-client: client-prereqs
	@echo "$(GEN_COLOR)Generating TypeScript client based on the OpenAPI spec$(NO_COLOR)"
	@docker run --rm -it \
     	  -v ${PWD}:/repo \
     	  openapitools/openapi-generator-cli:v4.3.1 generate \
     	  --generator-name typescript-fetch \
     	  --input-spec $(API_SPEC_URL) \
     	  --output /repo/src/client

# Client pre-requisites.
client-prereqs:
	rm -rf src/client
	mkdir -p src/client
