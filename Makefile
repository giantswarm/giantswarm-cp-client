CLIENT_NAME   := giantswarm-cp-client
API_VERSION := 1.0.0

# Generate ts-client schema
.PHONY: ts-client
ts-client: client-prereqs
	@echo "Generating OpenAPI TypeScript client"
	@docker run --rm -it \
     	  -v ${PWD}:/repo \
     	  openapitools/openapi-generator-cli:v4.3.1 generate \
     	  --generator-name typescript-fetch \
     	  --input-spec /repo/api-spec/swagger.json \
     	  --output /repo/src/client

client-prereqs:
	rm -rf src/client
	mkdir -p src/client

.PHONY: openapi-spec
openapi-spec: build-generator
	@echo "Generating OpenAPI spec"
	generator/giantswarm-cp-client
	cp swagger.json api-spec/swagger.json
	rm -rf swagger.json

build-generator: generator/go.mod
	@echo "Building OpenAPI spec generator"
	@cd generator \
	&& go build
