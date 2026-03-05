// src/util/downloadAsset.ts
export const downloadLatestAsset = async (
    releaseUrl: string,
    filenameRegex: RegExp
): Promise<void> => {
    try {
        const response = await fetch(releaseUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch release data');
        }

        const data = await response.json();

        if (!Array.isArray(data.assets)) {
            throw new Error('No assets found in the release');
        }

        const matchingAsset = data.assets.find((asset: any) =>
            filenameRegex.test(asset.name)
        );

        if (!matchingAsset) {
            alert('No matching file found in the latest release.');
            return;
        }

        const link = document.createElement('a');
        link.href = matchingAsset.browser_download_url;
        link.download = matchingAsset.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Download error:', error);
        alert('An error occurred while trying to download. Please try again or use the releases page.');
    }
};