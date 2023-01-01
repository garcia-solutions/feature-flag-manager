import { Exception } from "@adonisjs/core/build/standalone"
import FeatureFlag from "App/Models/FeatureFlag"

export default class FeatureFlagService {
    
    public async getFeatureFlag(number: number): Promise<FeatureFlag> {
        return await FeatureFlag.findByOrFail('number', number);
    }

    public async deleteFeatureFlag(number: number): Promise<void> {
        let featureFlag = await FeatureFlag.findByOrFail('number', number);
        await featureFlag.delete()
    }
    
    public async listFeatureFlags(): Promise<FeatureFlag[]> {
        return await FeatureFlag.all();
    }

    public async newFeatureFlag(number: number, description: string): Promise<FeatureFlag> {
        let featureFlag = await FeatureFlag.query().where('number', number).first()
        if (featureFlag) {
            throw new Exception("Feature Flag already created", 400)
        }
        
        featureFlag = new FeatureFlag()
        featureFlag.number = number
        featureFlag.description = description
        return await featureFlag.save()
    }

    public async changeFeatureFlagStatus(number: number, active: boolean): Promise<FeatureFlag> {
        let featureFlag = await FeatureFlag.query().where('number', number).first()
        if (!featureFlag) {
            throw new Exception("Feature Flag not found", 404)
        }
        
        if (featureFlag.active === active) {
            return featureFlag;
        }

        featureFlag.active = active
        return await featureFlag.save()
    }
}