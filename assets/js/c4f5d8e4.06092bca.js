"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[195],{5239:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(7294),i=n(6010),r=n(2164),o=n(814),l=n(9960),s=n(2263),c=n(4996),m="features_keug";function u(){return a.createElement("span",{className:(0,i.Z)("stopes")},"stopes")}var d=[{title:"Easy to Use",description:a.createElement(a.Fragment,null,a.createElement(u,null)," was designed to provide a modular API to build and reproduce data mining pipelines. Where you run your pipeline and how you scale it is independent of its core logic. Everything is config-driven so you can easily reproduce and track results."),buttonTxt:"Quickstart",buttonUrl:"docs/quickstart",imageUrl:"img/shovel.svg"},{title:"Batteries Included",description:a.createElement(a.Fragment,null,a.createElement(u,null)," lets you focus on your core data mining needs by providing common modules used for this task and letting you write your pipelines with idiomatic python. Common optimizations have also been built-in to help you scale your work."),buttonTxt:"Learn More",buttonUrl:"docs/stopes",imageUrl:"img/modules.svg"},{title:"State-of-the-art Pipelines",description:a.createElement(a.Fragment,null,a.createElement(u,null)," was developed as part of the Meta AI No Language Left Behind research project. It comes with state-of-the-art pipelines out of the box. You can run our global mining pipeline and reproduce our research with just a few command lines."),buttonTxt:"Start Mining",buttonUrl:"docs/pipelines/global_mining",imageUrl:"img/pipelines.svg"}],g=[{title:"No-coding Mining",language:"bash",code:"python -m stopes.pipelines.bitext.global_mining_pipeline \\\n   src_lang=fuv \\\n   tgt_lang=zul \\\n   demo_dir=./demo \\\n   +preset=demo\\\n   output_dir=. \\\n   embed_text=laser3",content:a.createElement("p",null,a.createElement(u,null),"  comes with the Global Mining Pipeline that was used by the NLLB team. You can use it out of the box without extra coding. You will need to setup an environment and create a config file to point to your data, but you can start mining (locally or on a slurm cluster) without any coding. Check out the ",a.createElement(l.Z,{to:"docs/quickstart"},"Quickstart guide"),".")},{title:"Reproducible research",language:"yaml",code:'_target_: stopes.modules.preprocess.train_spm.TrainSpmModule\nconfig:\n  output_dir: ???\n  vocab_size: 50_000\n  training_lines: 5_000_000\n  character_coverage: 0.999995\n  model_type: "unigram"\n  shuffle_input_sentence: True\n  num_threads : 4',content:a.createElement("p",null,a.createElement(u,null)," is based on ",a.createElement(l.Z,{to:"http://hydra.cc/"},"Hydra"),", giving you full control over the behavior of your pipeline. Experiments are easily reproducible along with your results.")},{title:"Modular pipeline definition",language:"python",code:'import asyncio\n\n    import hydra\n    from omegaconf import DictConfig\n    from stopes.core.utils import clone_config\n    from stopes.modules.bitext.indexing.populate_faiss_index import PopulateFAISSIndexModule\n    from stopes.modules.bitext.indexing.train_faiss_index_module import TrainFAISSIndexModule\n\n    # the pipeline\n    async def pipeline(config):\n        # setup a launcher to connect jobs together\n        launcher = hydra.utils.instantiate(config.launcher)\n\n        # train the faiss index\n        trained_index = await launcher.schedule(TrainFAISSIndexModule(\n            config=config.train_index\n        ))\n\n        # pass in the trained index to the next step through config\n        with clone_config(config.populate_index) as config_with_index:\n            config_with_index.index=trained_index\n\n        # fill the index with content\n        populated_index = await launcher.schedule(PopulateFAISSIndexModule(\n            config=config_with_index\n        ))\n        print(f"Indexes are populated in: {populated_index}")\n\n    # setup main with Hydra\n    @hydra.main(config_path="conf", config_name="config")\n    def main(config: DictConfig) -> None:\n        asyncio.run(pipeline(config))\n    ',content:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement(u,null)," pipelines are composed of modules. No more duplicated, out-of sync code: your most common preprocessing steps can be shared among all your pipelines."),a.createElement("p",null,"You will find in this repository some implementations of a number of modules that are useful for translation data mining, Neural Machine Translation data pre-processing and model training. For example, we provide modules to build ",a.createElement(l.Z,{to:"https://faiss.ai/"},"faiss")," indexes, encode text with ",a.createElement(l.Z,{to:"https://github.com/facebookresearch/LASER"},"LASER")," and ",a.createElement(l.Z,{to:"https://huggingface.co/sentence-transformers"},"HuggingFace Transformers"),", mine bitext or train and evaluate ",a.createElement(l.Z,{to:"https://github.com/facebookresearch/fairseq"},"FAIRSEQ")," models."))}];function p(e){var t=e.title,n=e.description,r=e.buttonTxt,o=e.buttonUrl,s=e.imageUrl,m=(0,c.Z)(s),u=(0,c.Z)(o);return a.createElement("div",{className:(0,i.Z)("col sfeatures")},a.createElement("div",{className:(0,i.Z)("card card--full-height")},m&&a.createElement("div",{className:(0,i.Z)("card__image")},a.createElement("img",{src:m,alt:t,title:t})),a.createElement("div",{className:(0,i.Z)("card__body")},a.createElement("h4",null,t),a.createElement("p",null,n)),r&&o&&a.createElement("div",{className:(0,i.Z)("card__footer")},a.createElement(l.Z,{className:(0,i.Z)("button button--primary button--block"),to:u},r))))}function h(e){var t=e.title,n=e.children,i=e.flip,r=e.language,l=a.Children.toArray(n),s=l[0],c=l[1],m=a.createElement("div",{class:"col col--4 scontent"},s),u=a.createElement("div",{class:"col"},a.createElement(o.Z,{language:r},c)),d=m,g=u;return i&&(d=u,g=m),a.createElement("div",{className:"ssection"},a.createElement("div",{className:"row"},a.createElement("h3",null,t)),a.createElement("div",{className:"row"},d,g))}function f(){var e=(0,c.Z)("img/banner_bits/nllb.png"),t=(0,c.Z)("img/banner_bits/driving.png"),n=(0,c.Z)("img/banner_bits/stopes.png"),r=(0,c.Z)("img/banner_bits/large.png"),o=(0,c.Z)("img/banner_bits/meta.png"),s=(0,c.Z)("img/logo.svg");return a.createElement("header",{className:(0,i.Z)("sbanner shadow--md")},a.createElement("div",{className:"gh-stars"},a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=facebookresearch&repo=stopes&type=star&count=true&size=large",frameBorder:0,scrolling:0,width:160,height:30,title:"GitHub Stars"})),a.createElement("div",{className:"container"},a.createElement("div",{className:"sblue banner1"},a.createElement("img",{alt:"NO LANGUAGES LEFT BEHIND",src:e})),a.createElement("div",{className:"sblue banner2"},a.createElement("img",{alt:"Driving inclusion through machine translation",src:t})),a.createElement("h1",null,a.createElement("img",{alt:"logo",src:s,className:"logo"}),a.createElement("img",{alt:"stopes",src:n})),a.createElement("div",{className:"banner3"},a.createElement("img",{alt:"Large-Scale Translation Data Mining",src:r}))),a.createElement("div",{className:"bottom"},a.createElement("div",{className:"button-container"},a.createElement(l.Z,{className:(0,i.Z)("button button--secondary button--lg"),to:(0,c.Z)("docs/quickstart")},"Quickstart")),a.createElement("div",{className:"banner-meta"},a.createElement("img",{alt:"meta",src:o}))))}function b(){var e=(0,s.Z)().siteConfig,t=void 0===e?{}:e;return a.createElement(r.Z,{title:""+t.title,description:"Large-scale Translation Data Mining"},a.createElement(f,null),a.createElement("main",{className:"container smain"},d&&d.length>0&&a.createElement("section",{className:m},a.createElement("div",null,a.createElement("div",{className:"row"},d.map((function(e){var t=e.title,n=e.imageUrl,i=e.description,r=e.buttonTxt,o=e.buttonUrl;return a.createElement(p,{key:t,title:t,imageUrl:n,description:i,buttonTxt:r,buttonUrl:o})}))))),a.createElement("section",null,g.map((function(e,t){var n=e.title,i=e.language,r=e.code,o=e.content;return a.createElement(h,{key:n,flip:t%2,language:i,title:n},o,r)})))))}}}]);