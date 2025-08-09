release: 
	pnpm build
	git add -A
	git commit -am "release"
	git fetch --tags -f
	standard-version
	git push --follow-tags origin master
	npm publish --access public

.PHONY: release