import React from 'react';
import {useDoc} from '@docusaurus/theme-common/internal';

const VersionInjector = ({ children, targetVersion = 'VERSION', targetProduct = 'PRODUCT', prepend = '', currentTag = '', ignoreNightly = false}) => {
    const { metadata } = useDoc();
    const currentVersion = metadata.version;

    const processChildren = (child) => {
        if (typeof child === 'string') {
            let version = currentVersion;
            let product = targetProduct;

            if (version === 'current') {
                if (!ignoreNightly) {
                    if (product.indexOf("[") > -1) {
                        const split = product.split('[');
                        product = `${split[0]}-nightly[${split[1]}`;
                    } else {
                        product = `${product}-nightly`;
                    }
                }
                version = currentTag;
            } else if (prepend) {
                version = `${prepend}${version}`;
            }

            let replaced = child.replace(new RegExp(targetVersion, 'g'), version);
            replaced = replaced.replace(new RegExp(targetProduct, 'g'), product);

            return replaced;
        } else if (React.isValidElement(child)) {
            return React.cloneElement(child, child.props, processChildren(child.props.children));
        } else if (Array.isArray(child)) {
            return child.map(c => processChildren(c));
        } else {
            return child;
        }
    };

    return <>{processChildren(children)}</>;
};

export default VersionInjector;